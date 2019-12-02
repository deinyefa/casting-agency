import os
import unittest
import json
from flask_sqlalchemy import SQLAlchemy

from app import create_app
from models import setup_db, Actor, Movie


c_assisitant_auth = {
    "Authorization": (
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFrRkRSVGxGTVR"
        "VMU9VWkJNMFF3UlRVNE0wVXdOa1JFUkRVM01qRTNSRVJETmpsQk1EVTBPQSJ9.eyJpc3M"
        "iOiJodHRwczovL2Rldi1kZWlueWVmYS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWRk"
        "NThhY2FiMDVkM2EwZjIyMmFlM2I0IiwiYXVkIjpbImNhc3RpbmctYWdlbmN5IiwiaHR0c"
        "HM6Ly9kZXYtZGVpbnllZmEuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTU3NTI5ND"
        "k3MSwiZXhwIjoxNTc1MzgxMzcxLCJhenAiOiJnWmxmUzhDM0dnQUR6R0w1VWV6a2l3VFR"
        "rTnJQbDViUiIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJwZXJtaXNzaW9u"
        "cyI6WyJnZXQ6YWN0b3JzK21vdmllcyJdfQ.i9vAfOGi_o8wxBEakQy5"
        "UProS229164C22GXqvBcxa_jmqibHQUVgqwFs9R2lsBsDJGBGO3o46dUQlANmm9SzNKnz"
        "BhAPbVEtlSUSt60plAFu4doSWzlVRBI_jk4YccDPGVvPQ1y9GYFQWJgu3UBfv8NbRxKts"
        "6QZ3tQ8CFtBPOKrvjhtMf00EvGG12lzmVucfrDFuFI6JpdmaYaR7mUqctwYRNuR2HB1_Q"
        "FqJ0go7aot3GmPRSXSSap8AbXIBiHZEzMXB95_qCAsTRfSFO49HxwPDz3X0HkY4jpLedv"
        "9DTGOER9BmIodDEqRux-3LaZBuxvlQws2i1DWoCMrVsmRQ"
    )
}

c_director_auth = {
    "Authorization": (
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF"
        "rRkRSVGxGTVRVMU9VWkJNMFF3UlRVNE0wVXdOa1JFUkRVM01qRTNSRVJETmpsQk1EVTBP"
        "QSJ9.eyJpc3MiOiJodHRwczovL2Rldi1kZWlueWVmYS5hdXRoMC5jb20vIiwic3ViI"
        "joiYXV0aDB8NWRkNThiMGM4ZTJjMzUwZWU5NDdlZmU2IiwiYXVkIjpbImNhc3RpbmctYW"
        "dlbmN5IiwiaHR0cHM6Ly9kZXYtZGVpbnllZmEuYXV0aDAuY29tL3VzZXJpbmZvIl0sIml"
        "hdCI6MTU3NTI5NTExNCwiZXhwIjoxNTc1MzgxNTE0LCJhenAiOiJnWmxmUzhDM0dnQUR6"
        "R0w1VWV6a2l3VFRrTnJQbDViUiIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiL"
        "CJwZXJtaXNzaW9ucyI6WyJnZXQ6YWN0b3JzK21vdmllcyIsInBhdGNoOmFjdG9ycyttb3"
        "ZpZXMiLCJwb3N0K2RlbGV0ZTphY3RvcnMiXX0.rLjmxZVZrR03Q6"
        "sGhFrWBmDsmQwLV-jrR58g5bnMsLEjcmZlxYXu4y3YEM3J-_mOUsF4Y9h3bp5AeB6tm6"
        "BZdyYL08h21ZmECZks71Ldio0501rZTrbokRVhHxS2USBS-FzP0RkLvgbjtdjq0dGGl11"
        "U_cFd5IEZD8JKtAcomPYahrY00zkk9N7XwIWesCilEzLfETqoQN8ps1T86CW7vcNPcmZR"
        "O5EAiIiN29kG6ydV-gr8hw6W2YCal1klXCPwtGnb5dhAJJr4V17nMuZU4wCa6dJuNAuBp"
        "o0VJqPNywIkFnrapuAmijHj0vHZ069_Qyy4t3hI7mHuzMpqFAFfUw"
    )
}

e_producer_auth = {
    "Authorization": (
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFrRkRS"
        "VGxGTVRVMU9VWkJNMFF3UlRVNE0wVXdOa1JFUkRVM01qRTNSRVJETmpsQk1EVTBPQSJ9."
        "eyJpc3MiOiJodHRwczovL2Rldi1kZWlueWVmYS5hdXRoMC5jb20vIiwic3ViIjoiYXV0a"
        "DB8NWRkNThiODA4YWIyODUwZWUwNDA0MzgwIiwiYXVkIjpbImNhc3RpbmctYWdlbmN5Ii"
        "wiaHR0cHM6Ly9kZXYtZGVpbnllZmEuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTU"
        "3NTI5NTI2MCwiZXhwIjoxNTc1MzgxNjYwLCJhenAiOiJnWmxmUzhDM0dnQUR6R0w1VWV6"
        "a2l3VFRrTnJQbDViUiIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJwZXJta"
        "XNzaW9ucyI6WyJnZXQ6YWN0b3JzK21vdmllcyIsInBhdGNoOmFjdG9ycyttb3ZpZXMiLC"
        "Jwb3N0K2RlbGV0ZTphY3RvcnMiLCJwb3N0K2RlbGV0ZTptb3ZpZXMiXX0.gRE2cijX"
        "HHWwdRobDjnFdsWTvrxzEaBe0zQ6htkV-j7fwDg986eX0kx84GoKM0oCqHNMSIQs8Vgrv"
        "sDdtn3f5umpnfGWY5Nc6BgF_RJPF67MBS4n2ZBmcxBZB_cdQkGt1NIX--Grpq6YRH88gu"
        "_7nwU9jupXEmvb3VLiNcYYRBltrQnafV1HFOL9MTyHv6nIIkpsYn4ZFb2fr7FEZ_lZJ5L"
        "g8Hzyur3X2oOi4cNzBZJYlmv14U3dTUkkfvmLtc18gOpZUb8u86YulzDeE96F2_WXIAvE"
        "Im5kYqJa_gHTRuAozenhg4LdBM7ArA4_T87yxXXKMTsJWPzZShLoWkrpoA"
    )
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
        res = self.client().post(
            '/actors',
            headers=c_assisitant_auth,
            json=self.new_actor
        )
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 401)

    def test_post_actor_pass(self):
        res = self.client().post(
            '/actors',
            headers=c_director_auth,
            json=self.new_actor
        )
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertTrue(len(data['actors']) > 0)

    def test_patch_actor_fail(self):
        res = self.client().patch('/actors/3', headers=c_assisitant_auth,
                                  json={"gender": "female"})
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 401)

    def test_patch_actor_pass(self):
        res = self.client().patch('/actors/3', headers=e_producer_auth,
                                  json={"gender": "female"})
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
        res = self.client().post(
            '/movies',
            headers=c_director_auth,
            json=self.new_movie
        )
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 401)

    def test_post_movie_pass(self):
        res = self.client().post(
            '/movies',
            headers=e_producer_auth,
            json=self.new_movie
        )
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)
        self.assertTrue(len(data['movies']) > 0)

    def test_patch_movie_fail(self):
        res = self.client().patch('/movies/1', headers=c_assisitant_auth,
                                  json={"title": "Finding Nemo"})
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 401)

    def test_patch_movie_pass(self):
        res = self.client().patch('/movies/1', headers=c_director_auth,
                                  json={"title": "Finding Nemo"})
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
