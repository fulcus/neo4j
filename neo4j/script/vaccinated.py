import os
import random
from utils import read_csv


def vaccinated_with(num_vaccines):
    '''
    MATCH (a:Person), (v:Vaccine) WHERE a.cf = '1' and v.type = 'Pfizer'  
    CREATE (a) - [r:VACCINATED_WITH] -> (v)
    '''
    persons = read_csv(os.getcwd() + '/csv/people.csv')
    vaccines = read_csv(os.getcwd() + '/csv/vaccines.csv')
    f = open(os.getcwd() + '/rel/vaccinated.txt', 'w')

    for i in range(num_vaccines):
        cf = random.choice(persons)[3]
        id = random.choice(vaccines)[0]
        s = "MATCH (a:Person{cf:'" + cf +"'}), (b:Vaccine{id:'" + id + "'}) CREATE (a)-[:VACCINATED_WITH]->(b);\n"
        f.write(s)

vaccinated_with(600)
