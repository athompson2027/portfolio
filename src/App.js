import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EngineeringIcon from '@mui/icons-material/Engineering';
import MailIcon from '@mui/icons-material/Mail';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SchoolIcon from '@mui/icons-material/School';
import { useForm, ValidationError } from '@formspree/react';
import { padding, style } from '@mui/system';

function ContactForm() {
  const [state, handleSubmit] = useForm("xanjzjew");
  if (state===state) {
      return <div className="base gray" id='Contacts'>
        <div className='contact-form'>
          <h3 className='get-back'>
            Will Get Back Within 3 Days
          </h3>
        </div>
      </div>;
  }
  return (
    <form className="fs-form" onSubmit={handleSubmit}>
      <div className="fs-field">
        <input className="fs-input" id="name" name="name" placeholder='Your Name'required />
      </div>

      <div className="fs-field">
        <input className="fs-input" id="email" name="email" placeholder='Your Email'required /> 
      </div>

      <div className="fs-field">
        <textarea
          className="fs-textarea"
          id="message"
          name="message"
          placeholder='Your Message'
          required
        />
      </div>


      <div class="fs-button-group">
        <button className="fs-button" type="submit">
          Send
        </button>
      </div>

    </form>
  );
}

function DropDown() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
 
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['About Me'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href='#AboutMe'>
              <ListItemIcon>
                {<AccountCircleIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {['Education'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href='#Education'>
              <ListItemIcon>
                {<SchoolIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {['Experience'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href='#Experience'>
              <ListItemIcon>
                {<EngineeringIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {['Preformances'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href='#Preformances'>
              <ListItemIcon>
                {<MusicNoteIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {['Skills'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href='#Skills'>
              <ListItemIcon>
                {<DirectionsRunIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {['Contacts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href='#Contacts'>
              <ListItemIcon>
                {<MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  

  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor} id='Directory'>
          <Button onClick={toggleDrawer(anchor, true)} className='drop-down'>Directory</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
      );
}

function App() {

      return (
        <>


          <div className="base App-heading">
            <DropDown />
            <h1 className='big'>AJANI THOMPSON</h1>    
          </div>

          <div className="base" id='AboutMe'>
            <div>
              <h1 className='header'>About Me</h1>
            </div>
            <div>
              <h3 className='small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ipsum ex, vitae auctor justo egestas ut. Integer quis nunc convallis enim feugiat ultricies</h3>
            </div>
          </div>
        
          <div className="base gray" id="Education">
            <div>
                <h1 className='header'>Education</h1>
            </div>
            <div className='items'>
              <div className='edu-list-start '>    
                <h3 className='small'>{<SchoolIcon/>}  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ipsum ex, vitae auctor justo egestas ut. Integer quis nunc convallis enim feugiat ultricies</h3>
              </div>
              <div className='edu-list'>    
                <h3 className='small'>{<SchoolIcon/>}  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ipsum ex, vitae auctor justo egestas ut. Integer quis nunc convallis enim feugiat ultricies</h3>
              </div><div className='edu-list-end'>    
                <h3 className='small'>{<SchoolIcon/>}  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ipsum ex, vitae auctor justo egestas ut. Integer quis nunc convallis enim feugiat ultricies</h3>
              </div>
            </div>
          </div>

          <div className="base" id='Experience'>
            <div>
              <h1 className='header'>Experience</h1>
            </div> 
            
            <div >
              <div className='exp-time'>
                <p>Month Year - Month Year</p>
              </div>
              <div className='exp-list'>
                <h2>Company</h2>
                <h3>Job Title</h3>
                <p className='small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ipsum ex, vitae auctor justo egestas ut. Integer quis nunc convallis enim feugiat ultricies</p>
              </div>

            </div>
          </div>

          <div className="base gray" id='Preformances'>
            <h1 className='header'>Preformances</h1>
            <h3 className='small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam ipsum ex, vitae auctor justo egestas ut. Integer quis nunc convallis enim feugiat ultricies</h3>
          </div>

          <div className="base" id='Skills'>
            <h1 className='header'>Skills</h1>
            <ul>
              <li className='small'>Java</li>
              <li className='small'>Javascript</li>
              <li className='small'>CSS</li>
              <li className='small'>HTML</li>
              <li className='small'>Python</li>
              <li className='small'>Node.js</li>
              <li className='small'>React</li>


            </ul>
          </div>
          

      <div className="base gray" id='Contacts'>
        <h1 className='header'>Contacts</h1>
          <div className='contact-form'>
            <ContactForm />
          </div>
      </div>
      <div className='space'></div>



    </>
  );
}


export default App;
