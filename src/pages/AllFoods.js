import React,{Fragment} from 'react'
import FoodList from '../components/foods/FoodList';
import { useState,useEffect } from 'react'
import MealsPosterImage from '../assets/meals.jpg';
import styles from './AllFoods.module.css';
import axios from 'axios';


const AllFoods = () => {




   
    const[foods,setFoods]=useState([]);
    
    useEffect(()=>{
        async function getFoods()
        {
            try{
              const res= await  axios.get('http://localhost:8000/allfoods')
              console.log(res);
              setFoods(res.data);
            }
            catch(e){
                console.log(e.message);

            }
        }
        getFoods();

    },[])
    //empty dependency coz ek hi baar food load krne hai page pe

  return (
    <Fragment>
         <section className={styles.poster}>
                <img src={ MealsPosterImage} alt="table full of meals"/>
            </section>
        <FoodList foods={foods}/>
    </Fragment>
  )
}

export default AllFoods