import './App.css';

const flag = "https://media-exp1.licdn.com/dms/image/C560BAQH7JTX_BBFFgQ/company-logo_200_200/0/1550851757070?e=2159024400&v=beta&t=udpEteyKNPGesB6ZlIgHanXPRBVD1TUVEHcVzcYCqGw";
const hexagon = "data:image/png;base64,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"




function App() {
  return (
    <div className='checklist'>
      <div className='header'>
        <img src={flag} alt='Canada Flag' className='flag'/>
        <div className='maintext'>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>EXPRESS ENTRY
          <br/>CHECKLIST
        </h1>
        <h3>THIS DOCUMENT IS INTENDED FOR PERSONAL USE
          <br/>WITHIN THE IRCC PORTAL.
        </h3>
        </div>
        </div>
        <div className='instructions'>
          <h4 className='long-instructions'>This document checklist is intended to support you on your journey to
            <br/>Canada via the <a target={'_blank'} href='https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/federal-skilled-workers.html'>Express Entry</a> immigration 
            pathway. As a skilled immigrant, <br/>it is requested you consider the forms of immigration entry you are <a target={'_blank'} href='https://www.canada.ca/en/immigration-refugees-citizenship/services/come-canada-tool-immigration-express-entry.html'>eligible</a>
            <br/>for. Once <a target={'_blank'} href='https://www.canada.ca/en/immigration-refugees-citizenship/services/come-canada-tool-immigration-express-entry.html'>eligible</a> for immigration via 
            Express Entry assess the <a target={'_blank'} href='https://www.canada.ca/en/immigration-refugees-citizenship/services/come-canada-tool-immigration-express-entry.html'>documents and supporting information</a> required 
            before proceeding to this checklist.
          </h4>
        </div>
        <div className='stage-1'>
          <img src={hexagon} className='hexagon' alt='' />
          <h5 className='number'>1</h5>
          <h3>STAGE 1: BEFORE IMMIGRATION</h3>
          <div className='check-1'>
            <input type='checkbox'/>
            <div className='check-text'>
              Before you decide to come to Canada as an express entry
              <br/>immigrant, you should browse the job market to see if your
              <br/> current occupation can be transferred to a <a target={'_blank'} href='https://www.jobbank.gc.ca/home'>Canadian Market</a>.
              <ul style={{
                'position': 'relative',
                bottom: '10px'
              }}>
                <li>Check if your job is regulated by a <a target={'_blank'} href='https://www.cicic.ca/928/find_out_if_your_occupation_is_regulated_or_not.canada'>regulatory body</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='stage-1' style={{
          position: 'relative',
          bottom: '220px'
        }}>
        <img src={hexagon} className='hexagon' alt='' />
        <h5 className='number'>2</h5>
        <h3>STAGE 2: DURING IMMIGRATION</h3>
        <div className='check-1'>
            <input type='checkbox'/>
            <div className='check-text'>
              Prepare required <a target={'_blank'} href='https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents.html'>
                documents 
              </a> to submit for immigration.
            </div>
          </div>
          <div className='check-1'>
            <input type='checkbox'/>
            <div className='check-text'>
              Get <a target={'_blank'} href='https://www.linkedin.com/learning/writing-a-resume/writing-a-successful-resume'>
                certificates and learn
              </a> skills to boost your resume online.
            </div>
          </div>
          <div className='check-1'>
            <input type='checkbox'/>
            <div className='check-text'>
              Access online networking platforms: <a target={'_blank'} href='https://canadianrecruiter.ca/'>
                Canadian Recruiter Network
              </a>.
            </div>
          </div>
        </div>
        <div className='stage-1' style={{
          position: 'relative',
          bottom: '420px'
        }}>
          <img src={hexagon} className='hexagon' alt='' />
          <h5 className='number'>3</h5>
          <h3>STAGE 3: AFTER IMMIGRATION</h3>
          <div className='check-1'>
            <input type='checkbox'/>
            <div className='check-text'>
              Finding employement:
              <ul style={{
                'position': 'relative',
                bottom: '10px'
              }}>
                <li>Find and contact the <a target={'_blank'} href='https://www.cicic.ca/928/find_out_if_your_occupation_is_regulated_or_not.canada'>
                  regulatory body</a> if you want to get a <br/>
                  regulated job certified. </li>
                  <li>Browse the <a target={'_blank'} href='https://www.jobbank.gc.ca/home'>
                    Job Bank</a> and apply to available jobs.</li>
                    <li>Make <a target={'_blank'} href='https://immigrantnetworks.com/'>networks/connections</a>.</li>
              </ul>

            </div>
          </div>
          <div className='check-1' style={{
            position: 'relative',
            bottom: '165px'
          }}>
            <input type='checkbox'/>
            <div className='check-text'>
              Find <a target={'_blank'} href='https://www.cic.gc.ca/english/newcomers/services/index.asp#table1'>
                local services
              </a> to help you settle in Canada:
              <ul style={{
                'position': 'relative',
                bottom: '10px'
              }}>
                <li>Apply for <a target={'_blank'} href='https://www.canada.ca/en/employment-social-development/services/sin/apply.html'>SIN</a>.</li>
                <li>Activate <a  target={'_blank'} href='https://www.canada.ca/en/financial-consumer-agency/services/banking/opening-bank-account.html'>
                  bank account</a>.</li>
              </ul>
            </div>
          </div>
        </div>
        <img style={{
          position: 'relative',
          bottom: '600px',
          float: 'right',
          width: '110px'
        }} src='https://www.logolynx.com/images/logolynx/4f/4f35439a68736b351023d5d034c435a1.jpeg'/>
    </div>
  )
}

export default App;
