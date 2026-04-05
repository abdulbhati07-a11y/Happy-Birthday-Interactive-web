from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/celebrate", methods=["GET", "POST"])
def celebrate():
    name = request.form.get("name", "Friend")
    return render_template("celebrate.html", name=name)

if __name__ == "__main__":
    app.run(debug=True)