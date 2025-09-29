from flask import Flask, render_template

app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
def index():
    """Main page route"""
    return render_template('index.html')

@app.route('/test2')
def test2():
    """Test2 page route - demonstrates GitHub Copilot functionality"""
    title = "Test2 - GitHub Copilot Demo"
    message = "Welcome to the GitHub Copilot Skills Exercise!"
    features = [
        "Code suggestions and completions",
        "Intelligent code generation", 
        "Context-aware programming assistance",
        "Multi-language support"
    ]
    return render_template('test2.html', title=title, message=message, features=features)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)