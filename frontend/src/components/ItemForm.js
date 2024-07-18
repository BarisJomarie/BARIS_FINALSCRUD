import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemForm = ({item, onSuccess}) => {
    // personal information
    const [surname, setSurname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [middlename, setMiddlename] = useState('');
    const [extension, setExtension] = useState('');
    const [date_of_birth, setDateOfBirth] = useState('');
    const [place_of_birth, setPlaceOfBirth] = useState('');
    const [sex, setSex] = useState('');
    const [civil_status, setCivilStatus] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [blood_type, setBloodType] = useState('');
    const [gsis, setGsis] = useState('');
    const [pagibig, setPagibig] = useState('');
    const [philhealth, setPhilhealth] = useState('');
    const [sss, setSss] = useState('');
    const [tin, setTin] = useState('');
    const [agency_employee, setAgencyEmployee] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [residential_address, setResidentialAddress] = useState('');
    const [residential_zipcode, setResidentialZipcode] = useState('');
    const [permanent_address, setPermanentAddress] = useState('');
    const [permanent_zipcode, setPermanentZipcode] = useState('');
    const [telephone, setTelephone] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');

    // family background
    const [spouse_firstname, setSpouseFirstname] = useState('');
    const [spouse_middlename, setSpouseMiddlename] = useState('');
    const [spouse_surname, setSpouseSurname] = useState('');
    const [spouse_extension, setSpouseExtension] = useState('');
    const [occupation, setOccupation] = useState('');
    const [employer_name, setEmployerName] = useState('');
    const [business_address, setBusinessAddress] = useState('');
    const [business_telephone, setBusinessTelephone] = useState('');
    const [father_firstname, setFatherFirstname] = useState('');
    const [father_middlename, setFatherMiddlename] = useState('');
    const [father_surname, setFatherSurname] = useState('');
    const [father_extension, setFatherExtension] = useState('');
    const [mother_firstname, setMotherFirstname] = useState('');
    const [mother_middlename, setMotherMiddlename] = useState('');
    const [mother_surname, setMotherSurname] = useState('');
    const [mother_extension, setMotherExtension] = useState('');

    const [children1, setChildren1] = useState('');
    const [children1dob, setChildren1dob] = useState('');
    const [children2, setChildren2] = useState('');
    const [children2dob, setChildren2dob] = useState('');
    const [children3, setChildren3] = useState('');
    const [children3dob, setChildren3dob] = useState('');
    const [children4, setChildren4] = useState('');
    const [children4dob, setChildren4dob] = useState('');
    const [children5, setChildren5] = useState('');
    const [children5dob, setChildren5dob] = useState('');
    const [children6, setChildren6] = useState('');
    const [children6dob, setChildren6dob] = useState('');
    const [children7, setChildren7] = useState('');
    const [children7dob, setChildren7dob] = useState('');
    const [children8, setChildren8] = useState('');
    const [children8dob, setChildren8dob] = useState('');
    const [children9, setChildren9] = useState('');
    const [children9dob, setChildren9dob] = useState('');
    const [children10, setChildren10] = useState('');
    const [children10dob, setChildren10dob] = useState('');
    const [children11, setChildren11] = useState('');
    const [children11dob, setChildren11dob] = useState('');

    //educational background
    const [elementary_school, setElementarySchool] = useState('');
    const [elementary_bdc, setElementaryBdc] = useState('');
    const [elementary_pa_from, setElementaryPaFrom] = useState('');
    const [elementary_pa_to, setElementaryPaTo] = useState('');
    const [elementary_hue, setElementaryHue] = useState('');
    const [elementary_year_graduated, setElementaryYearGraduated] = useState('');
    const [elementary_scholarship, setElementaryScholarship] = useState('');

    const [secondary_school, setSecondarySchool] = useState('');
    const [secondary_bdc, setSecondaryBdc] = useState('');
    const [secondary_pa_from, setSecondaryPaFrom] = useState('');
    const [secondary_pa_to, setSecondaryPaTo] = useState('');
    const [secondary_hue, setSecondaryHue] = useState('');
    const [secondary_year_graduated, setSecondaryYearGraduated] = useState('');
    const [secondary_scholarship, setSecondaryScholarship] = useState('');

    const [vocational_school, setVocationalSchool] = useState('');
    const [vocational_bdc, setVocationalBdc] = useState('');
    const [vocational_pa_from, setVocationalPaFrom] = useState('');
    const [vocational_pa_to, setVocationalPaTo] = useState('');
    const [vocational_hue, setVocationalHue] = useState('');
    const [vocational_year_graduated, setVocationalYearGraduated] = useState('');
    const [vocational_scholarship, setVocationalScholarship] = useState('');

    const [college_school, setCollegeSchool] = useState('');
    const [college_bdc, setCollegeBdc] = useState('');
    const [college_pa_from, setCollegePaFrom] = useState('');
    const [college_pa_to, setCollegePaTo] = useState('');
    const [college_hue, setCollegeHue] = useState('');
    const [college_year_graduated, setCollegeYearGraduated] = useState('');
    const [college_scholarship, setCollegeScholarship] = useState('');

    const [gs_school, setGsSchool] = useState('');
    const [gs_bdc, setGsBdc] = useState('');
    const [gs_pa_from, setGsPaFrom] = useState('');
    const [gs_pa_to, setGsPaTo] = useState('');
    const [gs_hue, setGsHue] = useState('');
    const [gs_year_graduated, setGsYearGraduated] = useState('');
    const [gs_scholarship, setGsScholarship] = useState('');

    useEffect(() => {
        if(item) {
            setSurname(item.surname);
            setFirstname(item.firstname);
            setMiddlename(item.middlename);
            setExtension(item.extension);
            setDateOfBirth(item.date_of_birth);
            setPlaceOfBirth(item.place_of_birth);
            setSex(item.sex);
            setCivilStatus(item.civil_status);
            setHeight(item.height);
            setWeight(item.weight);
            setBloodType(item.blood_type);
            setGsis(item.gsis);
            setPagibig(item.pagibig);
            setPhilhealth(item.philhealth);
            setSss(item.sss);
            setTin(item.tin);
            setAgencyEmployee(item.agency_employee);
            setCitizenship(item.citizenship);
            setResidentialAddress(item.residential_address);
            setResidentialZipcode(item.residential_zipcode);
            setPermanentAddress(item.permanent_address);
            setPermanentZipcode(item.permanent_zipcode);
            setTelephone(item.telephone);
            setMobile(item.mobile);
            setEmail(item.email);

            //family background
            setSpouseFirstname(item.spouse_firstname);
            setSpouseMiddlename(item.spouse_middlename);
            setSpouseSurname(item.spouse_lastname);
            setSpouseExtension(item.spouse_extension);
            setOccupation(item.occupation);
            setEmployerName(item.employer_name);
            setBusinessAddress(item.business_address);
            setBusinessTelephone(item.business_telephone);
            setFatherFirstname(item.father_firstname);
            setFatherMiddlename(item.father_middlename);
            setFatherSurname(item.father_lastname);
            setFatherExtension(item.father_extension);
            setMotherFirstname(item.mother_firstname);
            setMotherMiddlename(item.mother_middlename);
            setMotherSurname(item.mother_lastname);
            setMotherExtension(item.mother_extension);

            setChildren1(item.children1);
            setChildren1dob(item.children1dob);
            setChildren2(item.children2);
            setChildren2dob(item.children2dob);
            setChildren3(item.children3);
            setChildren3dob(item.children3dob);
            setChildren4(item.children4);
            setChildren4dob(item.children4dob);
            setChildren5(item.children5);
            setChildren5dob(item.children5dob);
            setChildren6(item.children6);
            setChildren6dob(item.children6dob);
            setChildren7(item.children7);
            setChildren7dob(item.children7dob);
            setChildren8(item.children8);
            setChildren8dob(item.children8dob);
            setChildren9(item.children9);
            setChildren9dob(item.children9dob);
            setChildren10(item.children10);
            setChildren10dob(item.children10dob);
            setChildren11(item.children11);
            setChildren11dob(item.children11dob);

            //educational background
            setElementarySchool(item.elementary_school);
            setElementaryBdc(item.elementary_bdc);
            setElementaryPaFrom(item.elementary_pa_from);
            setElementaryPaTo(item.elementary_pa_to);
            setElementaryHue(item.elementary_hue);
            setElementaryYearGraduated(item.elementary_year_graduated);
            setElementaryScholarship(item.elementary_scholarship);

            setSecondarySchool(item.secondary_school);
            setSecondaryBdc(item.secondary_bdc);
            setSecondaryPaFrom(item.secondary_pa_from);
            setSecondaryPaTo(item.secondary_pa_to);
            setSecondaryHue(item.secondary_hue);
            setSecondaryYearGraduated(item.secondary_year_graduated);
            setSecondaryScholarship(item.secondary_scholarship);

            setVocationalSchool(item.vocational_school);
            setVocationalBdc(item.vocational_bdc);
            setVocationalPaFrom(item.vocational_pa_from);
            setVocationalPaTo(item.vocational_pa_to);
            setVocationalHue(item.vocational_hue);
            setVocationalYearGraduated(item.vocational_year_graduated);
            setVocationalScholarship(item.vocational_scholarship);

            setCollegeSchool(item.college_school);
            setCollegeBdc(item.college_bdc);
            setCollegePaFrom(item.college_pa_from);
            setCollegePaTo(item.college_pa_to);
            setCollegeHue(item.college_hue);
            setCollegeYearGraduated(item.college_year_graduated);
            setCollegeScholarship(item.college_scholarship);

            setGsSchool(item.gs_school);
            setGsBdc(item.gs_bdc);
            setGsPaFrom(item.gs_pa_from);
            setGsPaTo(item.gs_pa_to);
            setGsHue(item.gs_hue);
            setGsYearGraduated(item.gs_year_graduated);
            setGsScholarship(item.gs_scholarship);
        }
    }, [item]);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const data = {
            surname,
            firstname,
            middlename,
            extension,
            date_of_birth,
            place_of_birth,
            sex,
            civil_status,
            height,
            weight,
            blood_type,
            gsis,
            pagibig,
            philhealth,
            sss,
            tin,
            agency_employee,
            citizenship,
            residential_address,
            residential_zipcode,
            permanent_address,
            permanent_zipcode,
            telephone,
            mobile,
            email,

            //family background
            spouse_firstname,
            spouse_middlename,
            spouse_surname,
            spouse_extension,
            occupation,
            employer_name,
            business_address,
            business_telephone,
            father_firstname,
            father_middlename,
            father_surname,
            father_extension,
            mother_firstname,
            mother_middlename,
            mother_surname,
            mother_extension,

            children1, children1dob,
            children2, children2dob,
            children3, children3dob,
            children4, children4dob,
            children5, children5dob,
            children6, children6dob,
            children7, children7dob,
            children8, children8dob,
            children9, children9dob,
            children10, children10dob,
            children11, children11dob,

            //educational background
            elementary_school, elementary_bdc, elementary_pa_from, elementary_pa_to, elementary_hue, elementary_year_graduated, elementary_scholarship,
            secondary_school, secondary_bdc, secondary_pa_from, secondary_pa_to, secondary_hue, secondary_year_graduated, secondary_scholarship,
            vocational_school, vocational_bdc, vocational_pa_from, vocational_pa_to, vocational_hue, vocational_year_graduated, vocational_scholarship,
            college_school, college_bdc, college_pa_from, college_pa_to, college_hue, college_year_graduated, college_scholarship,
            gs_school, gs_bdc, gs_pa_from, gs_pa_to, gs_hue, gs_year_graduated, gs_scholarship
        };
        try {
            if(item) {
                await
                axios.put(`http://localhost:8000/items/${item.id}/`, data);
            }else {
                axios.post('http://localhost:8000/items/', data);
            }
            onSuccess();
        }catch(error) {
            console.error('Error submitting the form!', error);
        }
    };

    return(
        <center>
            <div>
                <h1 id='header'>Create Personal Data Sheet</h1>
                <div>
                    <form onSubmit={handleSubmit} >
                        <table>
                            <tr>
                                <td colSpan={'35'} style={{height: '0.2in', fontSize: '72.5%', backgroundColor:'gray', color: 'white', border: '1px solid black'}}>
                                    <b><i>I. PERSONAL INFORMATION</i></b>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 0px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    SURNAME
                                </td>
                                <td colSpan={'30'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={surname} onChange={(e) => setSurname(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 0px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    FIRST NAME
                                </td>
                                <td colSpan={'20'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)} required/>
                                </td>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    NAME EXTENSION <br/>
                                    (JR, SR)
                                </td>
                                <td colSpan={'5'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={extension} onChange={(e) => setExtension(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    MIDDLENAME
                                </td>
                                <td colSpan={'30'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={middlename} onChange={(e) => setMiddlename(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    DATE OF BIRTH<br/>
                                    <p>(yyyy/mm/dd)</p>
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='date' value={date_of_birth} onChange={(e) => setDateOfBirth(e.target.value)} required/>
                                </td>
                                <td colSpan={'7'} rowSpan={'3'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    CITIZENSHIP<br/>
                                    <p>
                                        If holder of dual citizenship,<br/>
                                        please indicate the detailes
                                    </p>
                                </td>
                                <td colSpan={'11'} rowSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={citizenship} onChange={(e) => setCitizenship(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    PLACE OF BIRTH
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={place_of_birth} onChange={(e) => setPlaceOfBirth(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    SEX
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={sex} onChange={(e) => setSex(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    CIVIL STATUS
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={civil_status} onChange={(e) => setCivilStatus(e.target.value)} required/>
                                </td>
                                <td colSpan={'5'} rowSpan={'2'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    RESIDENTIAL ADDRESS
                                </td>
                                <td colSpan={'13'} rowSpan={'2'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={residential_address} onChange={(e) => setResidentialAddress(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    HEIGHT
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={height} onChange={(e) => setHeight(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    WEIGHT
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={weight} onChange={(e) => setWeight(e.target.value)} required/>
                                </td>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    ZIP CODE
                                </td>
                                <td colSpan={'13'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={residential_zipcode} onChange={(e) => setResidentialZipcode(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    BLOOD TYPE
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={blood_type} onChange={(e) => setBloodType(e.target.value)} required/>
                                </td>
                                <td colSpan={'5'} rowSpan={'3'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    PERMANENT ADDRESS
                                </td>
                                <td colSpan={'13'} rowSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={permanent_address} onChange={(e) => setPermanentAddress(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    GSIS ID NO.
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={gsis} onChange={(e) => setGsis(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    PAG-IBIG ID NO.
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={pagibig} onChange={(e) => setPagibig(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    PHILHEALTH NO.
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={philhealth} onChange={(e) => setPhilhealth(e.target.value)}/>
                                </td>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    ZIP CODE
                                </td>
                                <td colSpan={'13'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={permanent_zipcode} onChange={(e) => setPermanentZipcode(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    SSS NO.
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={sss} onChange={(e) => setSss(e.target.value)}/>
                                </td>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    TELEPHONE NO.
                                </td>
                                <td colSpan={'13'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={telephone} onChange={(e) => setTelephone(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    TIN NO.
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={tin} onChange={(e) => setTin(e.target.value)}/>
                                </td>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    MOBILE NO.
                                </td>
                                <td colSpan={'13'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={mobile} onChange={(e) => setMobile(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    AGENCY EMPLOYEE NO.
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={agency_employee} onChange={(e) => setAgencyEmployee(e.target.value)}/>
                                </td>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    EMAIL ADDRESS (if any)
                                </td>
                                <td colSpan={'13'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                </td>
                            </tr>

                            {/* family background */}

                            <tr>
                                <td colSpan={'35'} style={{height: '0.2in', fontSize: '72.5%', backgroundColor:'gray', color: 'white', border: '1px solid black'}}>
                                    <b><i>II. FAMILY BACKGROUND</i></b>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 0px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    SPOUSE'S SURNAME
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={spouse_surname} onChange={(e) => setSpouseSurname(e.target.value)}/>
                                </td>
                                <td colSpan={'13'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    NAME OF CHILDREN(write full name and list and all)
                                </td>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    DATE OF BIRTH<br/>
                                    (yyyy/mm/dd)
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 0px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    SPOUSE'S FIRST NAME
                                </td>
                                <td colSpan={'6'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={spouse_firstname} onChange={(e) => setSpouseFirstname(e.target.value)}/>
                                </td>
                                <td colSpan={'4'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    NAME EXTENSION <br/>
                                    (JR, SR)
                                </td>
                                <td colSpan={'2'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={spouse_extension} onChange={(e) => setSpouseExtension(e.target.value)}/>
                                </td>
                                <td colSpan={'13'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='text' value={children1} onChange={(e) => setChildren1(e.target.value)} />
                                </td>
                                <td colSpan={'5'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='date' value={children1dob} onChange={(e) => setChildren1dob(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    SPOUSE'S MIDDLENAME
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={spouse_middlename} onChange={(e) => setSpouseMiddlename(e.target.value)}/>
                                </td>
                                <td colSpan={'13'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='text' value={children2} onChange={(e) => setChildren2(e.target.value)} />
                                </td>
                                <td colSpan={'5'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='date' value={children2dob} onChange={(e) => setChildren2dob(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    OCCUPATION
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={occupation} onChange={(e) => setOccupation(e.target.value)}/>
                                </td>
                                <td colSpan={'13'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='text' value={children3} onChange={(e) => setChildren3(e.target.value)} />
                                </td>
                                <td colSpan={'5'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='date' value={children3dob} onChange={(e) => setChildren3dob(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    EMPLOYER/BUSINESS NAME
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={employer_name} onChange={(e) => setEmployerName(e.target.value)}/>
                                </td>
                                <td colSpan={'13'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='text' value={children4} onChange={(e) => setChildren4(e.target.value)} />
                                </td>
                                <td colSpan={'5'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='date' value={children4dob} onChange={(e) => setChildren4dob(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    BUSINESS ADDRESS
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={business_address} onChange={(e) => setBusinessAddress(e.target.value)}/>
                                </td>
                                <td colSpan={'13'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='text' value={children5} onChange={(e) => setChildren5(e.target.value)} />
                                </td>
                                <td colSpan={'5'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='date' value={children5dob} onChange={(e) => setChildren5dob(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    TELEPHONE NO.
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={business_telephone} onChange={(e) => setBusinessTelephone(e.target.value)}/>
                                </td>
                                <td colSpan={'13'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='text' value={children6} onChange={(e) => setChildren6(e.target.value)} />
                                </td>
                                <td colSpan={'5'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='date' value={children6dob} onChange={(e) => setChildren6dob(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 0px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    FATHER'S SURNAME
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={father_surname} onChange={(e) => setFatherSurname(e.target.value)}/>
                                </td>
                                <td colSpan={'13'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='text' value={children7} onChange={(e) => setChildren7(e.target.value)} />
                                </td>
                                <td colSpan={'5'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='date' value={children7dob} onChange={(e) => setChildren7dob(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 0px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    FATHER'S FIRST NAME
                                </td>
                                <td colSpan={'6'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={father_firstname} onChange={(e) => setFatherFirstname(e.target.value)}/>
                                </td>
                                <td colSpan={'4'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    NAME EXTENSION <br/>
                                    (JR, SR)
                                </td>
                                <td colSpan={'2'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={father_extension} onChange={(e) => setFatherExtension(e.target.value)}/>
                                </td>
                                <td colSpan={'13'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='text' value={children8} onChange={(e) => setChildren8(e.target.value)} />
                                </td>
                                <td colSpan={'5'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='date' value={children8dob} onChange={(e) => setChildren8dob(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    FATHER'S MIDDLENAME
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={father_middlename} onChange={(e) => setFatherMiddlename(e.target.value)}/>
                                </td>
                                <td colSpan={'13'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='text' value={children9} onChange={(e) => setChildren9(e.target.value)} />
                                </td>
                                <td colSpan={'5'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='date' value={children9dob} onChange={(e) => setChildren9dob(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 0px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    MOTHER'S SURNAME
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={mother_surname} onChange={(e) => setMotherSurname(e.target.value)}/>
                                </td>
                                <td colSpan={'13'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='text' value={children10} onChange={(e) => setChildren10(e.target.value)} />
                                </td>
                                <td colSpan={'5'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='date' value={children10dob} onChange={(e) => setChildren10dob(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 0px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    MOTHER'S FIRST NAME
                                </td>
                                <td colSpan={'6'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={mother_firstname} onChange={(e) => setMotherFirstname(e.target.value)}/>
                                </td>
                                <td colSpan={'4'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    NAME EXTENSION <br/>
                                    (JR, SR)
                                </td>
                                <td colSpan={'2'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={mother_extension} onChange={(e) => setMotherExtension(e.target.value)}/>
                                </td>
                                <td colSpan={'13'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='text' value={children11} onChange={(e) => setChildren11(e.target.value)} />
                                </td>
                                <td colSpan={'5'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                <input type='date' value={children11dob} onChange={(e) => setChildren11dob(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '0px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    MOTHER'S MIDDLENAME
                                </td>
                                <td colSpan={'12'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={mother_middlename} onChange={(e) => setMotherMiddlename(e.target.value)}/>
                                </td>
                                <td colSpan={'18'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <center><i style={{color: 'red'}}>(Continue on seperate sheet if necessary)</i></center>
                                </td>
                            </tr>

                            {/* educational background */}

                            <tr>
                                <td colSpan={'35'} style={{height: '0.2in', fontSize: '72.5%', backgroundColor:'gray', color: 'white', border: '1px solid black'}}>
                                    <b><i>III. EDUCATIONAL BACKGROUND</i></b>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} rowSpan={'2'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    LEVEL
                                </td>
                                <td colSpan={'6'} rowSpan={'2'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    NAME OF SCHOOL<br/>
                                    (write in full)
                                </td>
                                <td colSpan={'6'} rowSpan={'2'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    BASIC EDUCATION/DEGREE/<br/>COURSE<br/>
                                    (write in full)
                                </td>
                                <td colSpan={'6'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    PERIOD OF ATTENDANCE
                                </td>
                                <td colSpan={'6'} rowSpan={'2'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    HIGHEST LEVEL/<br/>
                                    UNITS EARNED<br/>
                                    (if not graduated)
                                </td>
                                <td colSpan={'3'} rowSpan={'2'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    YEAR GRADUATED
                                </td>
                                <td colSpan={'3'} rowSpan={'2'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black', fontSize: '50.5%'}}>
                                    SCHOLARSHIP/<br/>
                                    ACADEMIC<br/>
                                    HONORS<br/>
                                    RECEIVED
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'3'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black', height: '1px'}}>
                                    FROM
                                </td>
                                <td colSpan={'3'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black', height: '1px'}}>
                                    TO
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    ELEMENTARY
                                </td>
                                <td colSpan={'6'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={elementary_school} onChange={(e) => setElementarySchool(e.target.value)}/>
                                </td>
                                <td colSpan={'6'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={elementary_bdc} onChange={(e) => setElementaryBdc(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={elementary_pa_from} onChange={(e) => setElementaryPaFrom(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={elementary_pa_to} onChange={(e) => setElementaryPaTo(e.target.value)}/>
                                </td>
                                <td colSpan={'6'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={elementary_hue} onChange={(e) => setElementaryHue(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={elementary_year_graduated} onChange={(e) => setElementaryYearGraduated(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={elementary_scholarship} onChange={(e) => setElementaryScholarship(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    SECONDARY
                                </td>
                                <td colSpan={'6'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={secondary_school} onChange={(e) => setSecondarySchool(e.target.value)}/>
                                </td>
                                <td colSpan={'6'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={secondary_bdc} onChange={(e) => setSecondaryBdc(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={secondary_pa_from} onChange={(e) => setSecondaryPaFrom(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={secondary_pa_to} onChange={(e) => setSecondaryPaTo(e.target.value)}/>
                                </td>
                                <td colSpan={'6'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={secondary_hue} onChange={(e) => setSecondaryHue(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={secondary_year_graduated} onChange={(e) => setSecondaryYearGraduated(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={secondary_scholarship} onChange={(e) => setSecondaryScholarship(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    VOCATIONAL
                                </td>
                                <td colSpan={'6'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={vocational_school} onChange={(e) => setVocationalSchool(e.target.value)}/>
                                </td>
                                <td colSpan={'6'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={vocational_bdc} onChange={(e) => setVocationalBdc(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={vocational_pa_from} onChange={(e) => setVocationalPaFrom(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={vocational_pa_to} onChange={(e) => setVocationalPaTo(e.target.value)}/>
                                </td>
                                <td colSpan={'6'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={vocational_hue} onChange={(e) => setVocationalHue(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={vocational_year_graduated} onChange={(e) => setVocationalYearGraduated(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={vocational_scholarship} onChange={(e) => setVocationalScholarship(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    COLLEGE
                                </td>
                                <td colSpan={'6'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={college_school} onChange={(e) => setCollegeSchool(e.target.value)}/>
                                </td>
                                <td colSpan={'6'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={college_bdc} onChange={(e) => setCollegeBdc(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={college_pa_from} onChange={(e) => setCollegePaFrom(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={college_pa_to} onChange={(e) => setCollegePaTo(e.target.value)}/>
                                </td>
                                <td colSpan={'6'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={college_hue} onChange={(e) => setCollegeHue(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={college_year_graduated} onChange={(e) => setCollegeYearGraduated(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={college_scholarship} onChange={(e) => setCollegeScholarship(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={'5'} className='table-label' style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    GRADUATE STUDIES
                                </td>
                                <td colSpan={'6'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={gs_school} onChange={(e) => setGsSchool(e.target.value)}/>
                                </td>
                                <td colSpan={'6'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={gs_bdc} onChange={(e) => setGsBdc(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={gs_pa_from} onChange={(e) => setGsPaFrom(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={gs_pa_to} onChange={(e) => setGsPaTo(e.target.value)}/>
                                </td>
                                <td colSpan={'6'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={gs_hue} onChange={(e) => setGsHue(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={gs_year_graduated} onChange={(e) => setGsYearGraduated(e.target.value)}/>
                                </td>
                                <td colSpan={'3'} style={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', borderColor: 'black'}}>
                                    <input type='text' value={gs_scholarship} onChange={(e) => setGsScholarship(e.target.value)}/>
                                </td>
                            </tr>
                            
                        </table>
                        <button type='submit' id='submit-button' className='submit-button'>Add Item</button>
                    </form>
                </div>
            </div>
        </center>
    );

}

export default ItemForm;