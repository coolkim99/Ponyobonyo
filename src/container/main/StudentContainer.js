//import program from '../../data/program';
import StudentElements from '../../components/Main/StudentElements';

const StudentContainer = () => {
    const program = [
        {
            id: 1,
            name: '김시원',
            birthday: '990503',
            parentName: '000',
            phone: '010-9947-3422',
            relationship: '모'
        },
        {
            id: 2,
            name: '김시원',
            birthday: '990503',
            parentName: '000',
            phone: '010-9947-3422',
            relationship: '모'
        },
        {
            id: 3,
            name: '김시원',
            birthday: '990503',
            parentName: '000',
            phone: '010-9947-3422',
            relationship: '모'
        }
      ];
    console.log(program);

    return(
        <>
        {program.map((program) => (
            <StudentElements student={program}/>
        ))}
        </> 
    )
}

export default StudentContainer;