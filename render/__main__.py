import datetime

from jinja2 import Environment, FileSystemLoader

from render import project_dir

env = Environment(loader=FileSystemLoader(str(project_dir / 'templates')))
template = env.get_template('index.html')

data = {
    'name': 'Dr. Jane Doe',
    'title': 'Researcher in Natural Language Processing',
    'about': 'I am a researcher focusing on multilingual models and natural language processing.',
    'research_interests': ['Machine Translation', 'Multilingual Models', 'Deep Learning'],
    'publications': [
        'Doe, J. et al. (2023). A Study on Multilingual Translation Models. ACL 2023.',
        'Doe, J. et al. (2022). Efficient Neural Networks for NLP. EMNLP 2022.'
    ],
    'email': 'jane.doe@example.com',
    'location': 'Tokyo, Japan',
    'year': datetime.datetime.now().year
}

output = template.render(data)

(project_dir / 'dist').mkdir(parents=True, exist_ok=True)
with (project_dir / 'dist' / 'index.html').open(mode='w', encoding='utf-8') as fp:
    fp.write(output)
