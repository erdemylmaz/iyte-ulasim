import requests
from datetime import datetime
from bs4 import BeautifulSoup

urls = [
    "https://www.eshot.gov.tr/tr/UlasimSaatleri/883/288",
    "https://www.eshot.gov.tr/tr/UlasimSaatleri/882/288",
    "https://www.eshot.gov.tr/tr/UlasimSaatleri/982/288",
    "https://www.eshot.gov.tr/tr/UlasimSaatleri/981/288"
]

# URL of the webpage

data = {}

# Send a GET request to fetch the HTML content
for url in urls:
    response = requests.get(url)
    current_bus_code = url.split("/")[-2]

    # Check if the request was successful
    if response.status_code == 200:
        # Parse the HTML content using BeautifulSoup
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find all elements with a specific class name
        panels = soup.find_all(class_='panel')

        today_panel = panels[0]
        today_date = datetime.now().strftime("%d.%m.%Y")
        #today_date = "26.05.2025"

        for panel in panels: 
            h4_tag = panel.find('h4')
            if h4_tag:
                date = h4_tag.getText()
                if date == today_date:
                    today_panel = panel
                    break

        timescamps = today_panel.find_all('ul')

        data[current_bus_code] = {
            "iyte": [],
            "faltay": [],
        }

        for i in range(len(timescamps)):
            timescamp = timescamps[i]
            time_rows = timescamp.find_all(class_="inBlock")
            departure_location = "iyte"
            if i == 1:
                departure_location = "faltay"

            for time_row in time_rows:
                data[current_bus_code][departure_location].append(time_row.text.strip())
    else:
        print(f"Failed to retrieve the bus '{current_bus_code}'. Status code: {response.status_code}")


def format_data(data):
    for bus_code in data.keys():
        iyte_departures = data[bus_code]["iyte"] 
        faltay_departures = data[bus_code]["faltay"]

        formatted_iyte_departures = []
        formatted_faltay_departures = []

        for iyte_departure in iyte_departures:
            h = iyte_departure.split(":")[0]
            m = iyte_departure.split(":")[1]
            formatted_iyte_departures.append({'h': int(h), 'm': int(m)})

        for faltay_departure in faltay_departures:
            h = faltay_departure.split(":")[0]
            m = faltay_departure.split(":")[1]
            formatted_faltay_departures.append({'h': int(h), 'm': int(m)})

        print(f"Bus Code: {bus_code}")
        print("IYTE Departures:")
        print(formatted_iyte_departures)
        print("FALTAY Departures:")
        print(formatted_faltay_departures)

format_data(data)
