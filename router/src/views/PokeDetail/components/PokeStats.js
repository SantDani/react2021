export default function PokeStats({stats}){

    console.log('log - len stat' , stats);
    return(
        <>
            <h3>Skills</h3>
            {stats?.map(({stat, base_stat}, index) => (
                <div>
                    <p>
                        {stat.name} :  {base_stat} %
                    </p>
                </div>
            ))}
        </>
    );
}