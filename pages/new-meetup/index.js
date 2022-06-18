import NewMeetupForm from '../../components/meetups/NewMeetupForm'
function NewMeetupPage (){
    function addMeetupHandler (meetup){}

    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}
export default NewMeetupPage