


// export function getAllData() {


// }

import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

const useFetch = (url) => {

//     const QUERY = gql`
//     query JobWhereInput($input: JobWhereInput) {
//     commitments {
//         jobs(where: $input) {
//         id
//         title
//         company {
//         name
//         }
//         description
//         applyUrl
//         userEmail
//         }
//     }
//     }
//     `;




// //   const [data, setData] = useState(null);
//   const { loading, data, error } = useQuery(QUERY, {
//     variables: {
//         input: {
//         company: {
//         name: "Segment",
//         },
//             },
//     },
//     pollInterval: 0,
//     });
// if(data){
// console.log(data);
// const commitments = data.commitments;
// return data.commitments;

// }
};

export default useFetch;
