import Card from './Card'
import WomanImg from '../assets/illustration-woman-online-desktop.svg'
import './FaqAccordion.css'

function FaqAccordion() {
  return (
    <Card>
        <div className="main">
            <div className="left">
                <img src={WomanImg} alt="" />
            </div>
            <div className="right">
            How many team members can I invite?
            You can invite up to 2 additional users on the Free plan. There is no limit on 
            team members for the Premium plan.

            What is the maximum file upload size?
            No more than 2GB. All files in your account must fit your allotted storage space.

            How do I reset my password?
            Click “Forgot password” from the login page or “Change password” from your profile page.
            A reset link will be emailed to you.

            Can I cancel my subscription?
            Yes! Send us a message and we’ll process your request no questions asked.

            Do you provide additional support?
            Chat and email support is available 24/7. Phone lines are open during normal business hours.
            </div>
        </div>
    </Card>
  )
}

export default FaqAccordion