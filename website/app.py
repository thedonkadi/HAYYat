from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sports')
def sports():
    return render_template('sports.html')

@app.route('/politics')
def politics():
    return render_template('politics.html')

@app.route('/business')
def business():
    return render_template('business.html')

@app.route('/education')
def education():
    return render_template('education.html')

if __name__ == '__main__':
    app.run(debug=True)
