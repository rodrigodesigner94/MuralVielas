import styles from './section.module.css';

function Section ( ){
    const data = [
        {id: '1', image: 'src/assets/imagens/sectionHome/52674604077_426dee2be7_w.jpg'},
        {id: '2', image: 'src/assets/imagens/sectionHome/52692154583_5db95c3609_w.jpg'},
        {id: '3', image: 'src/assets/imagens/sectionHome/52736918680_54bf8a90ff_w.jpg'},
        {id: '4', image: 'src/assets/imagens/sectionHome/52745090397_250922aecd_w.jpg'},
        {id: '5', image: 'src/assets/imagens/sectionHome/52750673434_0f5360ef4c_w.jpg'},
        {id: '6', image: 'src/assets/imagens/sectionHome/52782009235_48572c4607_w.jpg'},
    ]
    return(
        <div className={styles.container}>
        {data.map((item) =>(
            <img className={styles.img} key={item.id} src={item.image}/>
        ))}
        </div>
    )
}
export default Section