import os
import random
import itertools
from utils import read_csv

# Field names are: 0: first_name, 1: last_name, 2: email, 3: cf

def randomSublists(someList, num_families=80, max_size_families=6):
    resultList = [] #result container
    index = 0 #start at the start of the list
    #length = len(someList) #and cache the length for performance on large lists
    length = num_families # number of families
    while (index < length):
        randomNumber = random.randint(2, max_size_families) #get a number between 1 and the remaining choices
        resultList.append(someList[index:index+randomNumber]) #append a list starting at index with randomNumber length to it
        index = index + randomNumber #increment index by amount of list used
    return resultList #return the list of randomized sublists

def lives_with():
    '''
    MATCH (a:Person), (b:Person) WHERE a.cf != b.cf and a.cf = '1' and b.cf = '2' 
    CREATE (a)-[r: LIVES_WITH]->(b)
    '''

    persons = read_csv(os.getcwd() + '/csv/people.csv')
    f = open(os.getcwd() + '/rel/lives_with.txt', 'w')

    families = randomSublists(persons, num_families=80, max_size_families=2)
    for family in families:
        for pair in itertools.permutations(family, 2):
            # print(pair)
            s = "MATCH (a:Person{cf:'"+ pair[0][3] +"'}), (b:Person{cf:'"+ pair[1][3] +"'}) CREATE (a)-[:LIVES_WITH]->(b);\n"
            f.write(s)


lives_with()
