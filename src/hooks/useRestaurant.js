import { useState} from 'react'
import yelp from '../api/yelp';

export default () => {
    const [restaurant, setRestaurant] = useState({});
    const [errorMessage, setErrorMessage] = useState('')

   const getRestaurantApi = async (id) => {
      try{
         const response = await yelp.get(
            `/${id}`,
            {
               params: {
                  locale: 'en_US',
               }
            }
         );
         setRestaurant(response.data)
         setErrorMessage('')

      } catch (error) {
         setErrorMessage(error.message)
      }
      
   };

   // useEffect(() => {searchApi('spanish')}, []);

   return [getRestaurantApi, restaurant, errorMessage];
}