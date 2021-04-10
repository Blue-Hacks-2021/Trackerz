import requests
import pandas as pd 

url = 'https://covid19-api-philippines.herokuapp.com/api/list-of/regions'
resp = requests.get(url=url)
data = resp.json() 
regions = []
for obj in data['data']:
    if obj['region'] == '':
        continue
    regions.append(obj['region'])

region = "ncr"
# region = "ncr"
url = f'https://covid19-api-philippines.herokuapp.com/api/timeline?region={region}'
print(url)
resp = requests.get(url=url)
data = resp.json() 

dates = []
cases = []
total = 0
for obj in data['data']:
    # total += obj['cases'] - obj['recovered'] - obj['died']
    total += obj['cases']
    dates.append(obj['date'])
    cases.append(obj['cases'])

print(cases)

output = pd.DataFrame({'Date': dates, 'Cases': cases})
output.to_csv('cases.csv', index=False)