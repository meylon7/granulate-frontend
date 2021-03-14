#!/usr/bin/env python
import time
from typing import List, Dict
from random import randint

from fastapi import FastAPI
from mock_data import MOCK_SERVICES

app = FastAPI()


def random_sleep():
    time.sleep(randint(0, 5))


@app.get("/api/v1/services")
def services() -> List[str]:
    random_sleep()
    return list(MOCK_SERVICES.keys())


@app.get("/api/v1/instances/{service_id}")
def instances(service_id: str) -> Dict[str, str]:
    random_sleep()
    return MOCK_SERVICES[service_id]
