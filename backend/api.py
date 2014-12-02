__author__ = 'chrisshroba'

from flask import *

api_blueprint = Blueprint("api", __name__)

@api_blueprint.route("/message")
def message():
