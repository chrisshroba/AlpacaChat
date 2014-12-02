__author__ = 'chrisshroba'

from flask import *
from api import api_blueprint

app = Flask(__name__)

app.register_blueprint(api_blueprint, url_prefix="/api")

app.run(port=9090,host="0.0.0.0")
