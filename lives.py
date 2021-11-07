# importing csv module
import csv
import random
import itertools

def read_csv(filename):
    # initializing the titles and rows list
    fields = []
    rows = []

    # reading csv file
    with open(filename, 'r') as csvfile:
        # creating a csv reader object
        csvreader = csv.reader(csvfile)
        
        # extracting field names through first row
        fields = next(csvreader)

        # extracting each data row one by one
        for row in csvreader:
            rows.append(row)

        # get total number of rows
        print("Total no. of rows: %d"%(csvreader.line_num))

    # printing the field names
    print('Field names are:' + ', '.join(field for field in fields) + '\n')
    return rows

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
    rows = read_csv('csv/people.csv')
    f = open('rel/lives_with.txt', 'w')

    families = randomSublists(rows, num_families=80, max_size_families=2)
    for family in families:
        for pair in itertools.permutations(family, 2):
            # print(pair)
            s = "MATCH (a:Person{cf:'"+ pair[0][3] +"'}), (b:Person{cf:'"+ pair[1][3] +"'}) CREATE (a)-[:LIVES_WITH]->(b);\n"
            f.write(s)

lives_with()
