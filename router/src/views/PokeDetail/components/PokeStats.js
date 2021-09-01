export default function PokeStats({stat, base_stat}){

    // console.log('log - stats' , stat, base_stat);
    return(
        <>
           <p>
                {/* {stat} :  {base_stat} % */}
                {stat?.name} : {base_stat}  u
            </p>
        </>
    );
}