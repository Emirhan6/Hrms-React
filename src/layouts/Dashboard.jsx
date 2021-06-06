import React from 'react'
import EmployeeList from '../pages/EmployeeList'
import EmployerList from '../pages/EmployerList'
import JobSeekerList from '../pages/JobSeekerList'
import PositionList from '../pages/PositionList'
import Navi from './Navi'

export default function Dashboard() {
    return (
        <div>
            <Navi/>
            <PositionList/>
            <JobSeekerList/>
            <EmployerList/>
            <EmployeeList/>
        </div>
    )
}
