# NPLB - No Passengers Left Behind
At [Hacktrain VI](https://hackpartners.com/) we built No Passengers Left Behind. It helps empower station and train staff and make booking rail assistence not a big deal. 

Currently to book rail assistence you need to call up over 24 hours in advance, and you also have to find the right number for each train operator you need to travel with. This causes nearly 75% of people to just book at the station. 

This doesnt just cost the train companies more money. It makes it harded to provide a excelent experiance to the person who needs assistence and means that when there is disruption on the railways (who knew) passengers can fall through the cracks. 

## What does NPLB do for Passengers?

NPLB provides a way for **people** to request assistence on the railways, and then recieve real time updates when train staff are coming to help them to give the passenger the piece of mind that the help they need is coming. i.e. when they are approaching the next station.

We created an example app to show how this works but this will become and api and example components for ticketing apps such as trainline and national rail to integrate so that they can provide integrated access to assistence for their customers.

The system to give passengers live notifications is extremely flexible. It's designed to allow any type of integration depending on the passengers preference (i.e. text message, email, phone number, or app integrations).


## How does NPLB empower Staff?

Currently people who book assistance have a 90% satisfaction on the rail. We believe this is down to the dedication of the rail staff. We want to give them the tools to focus on their interactions with passengers and this system will take care of orchestrating the wider support experience.

To do this NPLB

* Shows staff who currently needs help now or in the next hour in a real time dashboard.
* Shows passengers whole journeys focussing on the handover points to make sure passangers don't slip through the cracks.
* Gives staff detailed passenger info to help them provide amazing assistance, such as the passengers location in the station.
* Collects metrics and centralises the feedback from passengers.

This is also hooked up to the same event system as the passenger app allowing NR systems to recieve a stream of every action that happens in the platform. This data should be used to focus on continually improving the experience for passengers with assistance requirements.


## The Tech

The whole system is based on PostgreSQL. This gives us a rock solid base to build apon whilst being extremely performant. It also has an incredibly powerful row level security system. This makes sure our data access rules are implemented at all levels preventing leakage of sensative passenger information. 

Because the access controls are implemented at the database level we can automatically build a graphql backend using [postgraphile](https://github.com/graphile/postgraphile). 
## The Team
