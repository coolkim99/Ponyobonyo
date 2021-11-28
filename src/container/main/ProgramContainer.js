//import program from '../../data/program';
import ProjectElements from '../../components/Main/ProjectElements';

const ProgramContainer = () => {
    const project = [
        {
            id: 1,
            name: '심리치료',
            classroom: '01',
            time: '월수금 10:00-12:00',
            instructor: '홍길동'
        },
        {
            id: 2,
            name: '미술치료',
            classroom: '01',
            time: '화목 10:00-12:00',
            instructor: '홍길동'
        },
        {
            id: 2,
            name: '음악치료',
            classroom: '01',
            time: '토 10:00-12:00',
            instructor: '홍길동'
        },
      ];

    return(
        <>
        {project.map((project) => (
            <ProjectElements program={project}/>
        ))}
        </> 
    )
}

export default ProgramContainer;