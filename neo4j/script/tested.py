import os
import random
from utils import read_csv
 

def tested_with(num_tests):
    '''
    MATCH (a:Person), (t:Test) WHERE a.cf = '1' and t.id = '1'  
    CREATE (a)-[r:TESTED_WITH] -> (t)
    '''
    persons = read_csv(os.getcwd() + '/csv/people.csv')
    tests = read_csv(os.getcwd() + '/csv/tests.csv')
    f = open(os.getcwd() + '/rel/tested.txt', 'w')

    for t in tests:
        cf = random.choice(persons)[3]
        id = t[0]
        s = "MATCH (a:Person{cf:'" + cf +"'}), (b:Test{id:'" + id + "'}) CREATE (a)-[:TESTED_WITH]->(b);\n"
        f.write(s)

tested_with(1500)
