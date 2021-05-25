import { InstantSearch, SearchBox, Hits, Configure, RefinementList} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch'
import React, { Component } from 'react'

//Lists done for RefinementList.js
var tags = ['assassin', 'melee', 'stealth',
 'pusher', 'fighter', 'carry',
  'ranged', 'mage','reccommended','tank',];
var role = ['Middle Lane', 'Top Lane', 'Jungler', 'Attack Damage Carry', 'Support'];
var dominantdamage = ['AP', 'AD', 'BOTH', 'ARMOR'];

//search config, contains api keys
const searchClient = algoliasearch(
    'RP7TLMJW40',
    '4cc4e533a31dc04bc024519c7948b777'
);

//Since the tags is defined as an array we need a function to retrieve each element
function getTags(str) {
    console.log(str)
    return (
        <ul> Characteristics:
        {str.map(function(item) {
      return <li key={item}>{item}</li>;
    })}
  </ul>
    )
}

//Hit config: display: title, author, and link to visit article
const Hit = ({ hit }) => 
    <div className='hit'>
        <p>Name: {hit.name}, Role: {hit.role}, Type: {hit.damagescale}</p>
        <p></p>
        <p>{getTags(hit.tags)}</p>
        <p>Lore: {hit.desc}</p>
    </div>
//SideBar Config
const SideBar = () =>
    <div className='sidebar'>

    </div>
//Content Config
const Content = () =>
    <div className='contents'>
        <Hits hitComponent={Hit}/>
    </div>


//SearchBar Component used in app.js
function SearchBar () {
    
    return (
        <div className='SearchHere'>
            
            <InstantSearch 
                searchClient={searchClient} 
                indexName="test_firebaseAlgolia">
            <header>
                <img src="logo192.png"/>
                <SearchBox translations={{placeholder:'Search Champions...'}}/>
            </header>
            <main>
                <SideBar/>
                <Content/>
            </main>
            </InstantSearch>
        </div>
        
    )
}

export default SearchBar;