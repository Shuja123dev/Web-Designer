import React from 'react'
import member1 from '../../assets/images/mitchel.png'
import TeamMember from './TeamMember'

const ExpertTeam = () => {
    return (
        <>
            <section class="expert-team">
                <div class="container">
                    <div class="expert-text">
                        <h6>Expert Team Members</h6>
                        <h2>Meet our Professional
                            Team Members</h2>
                    </div>
                    <div class="expert-flex">
                        <TeamMember memberPic={member1} job='Sn. Ui Ux Designer' name='Mitchel Marsh' />
                        <TeamMember memberPic={member1} job='Sn. Ui Ux Designer' name='Mitchel Marsh' />
                        <TeamMember memberPic={member1} job='Sn. Ui Ux Designer' name='Mitchel Marsh' />
                        <TeamMember memberPic={member1} job='Sn. Ui Ux Designer' name='Mitchel Marsh' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExpertTeam
