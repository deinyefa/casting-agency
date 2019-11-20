import os
import unittest
import json
from flask_sqlalchemy import SQLAlchemy

from app import create_app
from models import setup_db, Actor, Movie


c_assisitant_auth = {
            "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFrRkRSVGxGTVRVMU9VWkJNMFF3UlRVNE0wVXdOa1JFUkRVM01qRTNSRVJETmpsQk1EVTBPQSJ9.eyJpc3MiOiJodHRwczovL2Rldi1kZWlueWVmYS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWRkNThhY2FiMDVkM2EwZjIyMmFlM2I0IiwiYXVkIjoiY2FzdGluZy1hZ2VuY3kiLCJpYXQiOjE1NzQyNzY5OTAsImV4cCI6MTU3NDI4NDE5MCwiYXpwIjoiZ1psZlM4QzNHZ0FEekdMNVVlemtpd1RUa05yUGw1YlIiLCJzY29wZSI6IiIsInBlcm1pc3Npb25zIjpbImdldDphY3RvcnMrbW92aWVzIl19.Zkl4Ke2242djlNmDmcRuwGRo3RKpIcdz48RkwDUbdHzOeVqrp8lTzmFCoSNjMqfZMs_r-y29aGh1wejUS4lGi2xbCrP3ro5Lshx4dfB_XFo48maSg6WBeYHTQ1P7r5_hPlnn4U_lqVZuB2nANvQz1h_AsiF_VZiUYIMMINzBbj9LleLBmP6jOKphOesKBGynys7wwSq6IV22NMawuFsofztC8hIRy5QxpMZVWnIXE_dg5fcuiwKpbsjSLdSj4OnXtTWT-g6ssopfXuHE-UT15FqvPdATYePMcWMwlUypo9BbwYdGk3aGANIj4oA8k7AgWG1QilO4mBesWiHHwsIDVA"
        }

c_director_auth = {
    "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFrRkRSVGxGTVRVMU9VWkJNMFF3UlRVNE0wVXdOa1JFUkRVM01qRTNSRVJETmpsQk1EVTBPQSJ9.eyJpc3MiOiJodHRwczovL2Rldi1kZWlueWVmYS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWRkNThiMGM4ZTJjMzUwZWU5NDdlZmU2IiwiYXVkIjoiY2FzdGluZy1hZ2VuY3kiLCJpYXQiOjE1NzQyNzY5MjgsImV4cCI6MTU3NDI4NDEyOCwiYXpwIjoiZ1psZlM4QzNHZ0FEekdMNVVlemtpd1RUa05yUGw1YlIiLCJzY29wZSI6IiIsInBlcm1pc3Npb25zIjpbImdldDphY3RvcnMrbW92aWVzIiwicGF0Y2g6YWN0b3JzK21vdmllcyIsInBvc3QrZGVsZXRlOmFjdG9ycyJdfQ.P18XjtgW0IUrx1DeQQvsXuUqD-xkBfJiqnxcQRv4kDawZ7t73lJv6xew-6uTVyYoNFy272LvP8sXPkeDXI0WypxxsAV_lFl_AmE2KMfVYG2f293l1N-HCFaLtrpkuVySnwiMcxc5ut4fFbS9oX629e9OcTOaHdlCXKHXfd5CH9TalAkNrd9ZpV7QqtM6qz_e9zO6xzPFX7hCKV2LjwpnkQQfcv9P06Xal_6lXTCLy5ANpPhSb4dAXmzWHrD7hyCpTNfAh0jFQiZKfpS76-Hw63Cufcqs78Abu2flfIobNLRuWt9F6ykRLF0FK06xejD2IegCQK9-54KWLrbV9v1Rhw"
}

e_producer_auth = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFrRkRSVGxGTVRVMU9VWkJNMFF3UlRVNE0wVXdOa1JFUkRVM01qRTNSRVJETmpsQk1EVTBPQSJ9.eyJpc3MiOiJodHRwczovL2Rldi1kZWlueWVmYS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWRkNThiODA4YWIyODUwZWUwNDA0MzgwIiwiYXVkIjoiY2FzdGluZy1hZ2VuY3kiLCJpYXQiOjE1NzQyNzY0MTUsImV4cCI6MTU3NDI4MzYxNSwiYXpwIjoiZ1psZlM4QzNHZ0FEekdMNVVlemtpd1RUa05yUGw1YlIiLCJzY29wZSI6IiIsInBlcm1pc3Npb25zIjpbImdldDphY3RvcnMrbW92aWVzIiwicGF0Y2g6YWN0b3JzK21vdmllcyIsInBvc3QrZGVsZXRlOmFjdG9ycyIsInBvc3QrZGVsZXRlOm1vdmllcyJdfQ.FY5-JQ40gjEcKgzaxANEYHoSZIBFtOR9gerk_rPGI3v-I3SL2w3tudC7NWW-4GHQofdGenPesfjmM21yhQuBup87Na71Y-HhPsd2JB3KkoUE0mI7D8QX5jnJmHbR42DnO3dT9QgADF_kvIyqtHijPgGv1ranXeVZXpcVhb4rQA5m3wvL9oiz3OqNMIVdzfBUv52W0DQaNQhZc1rS2WIMuEwprdbDTXIgPrBUZ9VqIlQyDmG6a9hu2lK-iD-Ed1UNdHL-HXQSwtFKApULp3PTIuDhVKUuDBRFcqpQdEp-nuU2xL0gC0dpgzbv_2a7gDuY5kZYT5p9mkyE_P0D6Ph0iQ"
}


class ActorTestCase(unittest.TestCase):
    """This test case represents tests for Actor endpoints."""

    def setUp(self):

        self.app = create_app()
        self.client = self.app.test_client

        self.database_name = 'casting_agency_test.db'
        self.db_dir = os.path.dirname(os.path.abspath(__file__))
        self.database_path = "sqlite:///{}".format(
            os.path.join(self.db_dir, self.database_name)
        )

        setup_db(self.app, self.database_path)

        with self.app.app_context():
            self.db = SQLAlchemy()
            self.db.init_app(self.app)
            self.db.create_all()

        self.new_actor = {
            "name": "Tonto Dikeh",
            "age": 40,
            "gender": "female"
        }

    def tearDown(self):
        pass

    def test_get_actors_fail(self):
        res = self.client().get('/actors')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 401)

    def test_get_actors_pass(self):
        res = self.client().get('/actors', headers=c_assisitant_auth)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertTrue(len(data['actors']) >= 0)

    def test_post_actors_fail(self):
        res = self.client().post('/actors', headers=c_assisitant_auth, json=self.new_actor)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 401)

    def test_post_actor_pass(self):
        res = self.client().post('/actors', headers=c_director_auth, json=self.new_actor)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertTrue(len(data['actors']) > 0)

    def test_patch_actor_fail(self):
        res = self.client().patch('/actors/3', headers=c_assisitant_auth, json={"gender": "female"})
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 401)

    def test_patch_actor_pass(self):
        res = self.client().patch('/actors/3', headers=e_producer_auth, json={"gender": "female"})
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertTrue(data['actor'])

    def test_delete_actor_fail(self):
        res = self.client().delete('/actors/9', headers=c_assisitant_auth)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 401)

    def test_delete_actor_pass(self):
        res = self.client().delete('/actors/9', headers=c_director_auth)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertTrue(data['deleted_actor'])


class MovieTestCase(unittest.TestCase):
    """This test case represents tests for Actor endpoints."""

    def setUp(self):

        self.app = create_app()
        self.client = self.app.test_client

        self.database_name = 'casting_agency_test.db'
        self.db_dir = os.path.dirname(os.path.abspath(__file__))
        self.database_path = "sqlite:///{}".format(
            os.path.join(self.db_dir, self.database_name)
        )

        setup_db(self.app, self.database_path)

        with self.app.app_context():
            self.db = SQLAlchemy()
            self.db.init_app(self.app)
            self.db.create_all()

        self.new_movie = {
            "title": "Rhythm + Flow",
            "release_date": "11/2019"
        }

    def tearDown(self):
        pass

    def test_get_movies_fail(self):
        res = self.client().get('/movies')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 401)

    def test_get_movies_pass(self):
        res = self.client().get('/movies', headers=e_producer_auth)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertTrue(len(data['movies']) >= 0)

    def test_post_movies_fail(self):
        res = self.client().post('/movies', headers=c_director_auth, json=self.new_movie)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 401)

    def test_post_movie_pass(self):
        res = self.client().post('/movies', headers=e_producer_auth, json=self.new_movie)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertTrue(len(data['movies']) > 0)

    def test_patch_movie_fail(self):
        res = self.client().patch('/movies/1', headers=c_assisitant_auth, json={"title": "Finding Nemo"})
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 401)

    def test_patch_movie_pass(self):
        res = self.client().patch('/movies/1', headers=c_director_auth, json={"title": "Finding Nemo"})
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertTrue(data['movie'])

    def test_delete_movie_fail(self):
        res = self.client().delete('/movies/9', headers=c_director_auth)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 401)

    def test_delete_movie_pass(self):
        res = self.client().delete('/movies/9', headers=e_producer_auth)
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertTrue(data['deleted_movie'])


if __name__ == "__main__":
    unittest.main()
