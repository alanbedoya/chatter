import axios from 'axios';
import { useRef, useState, useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
import { useHistory } from 'react-router';
import { Nav, Footer } from '../components';
import { useAuth } from '../contexts/authContext';

export const Chats = () => {
  const didMountRef = useRef(false);
  const { user } = useAuth();
  console.log(user);
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], 'userPhoto.jpg', { type: 'image/jpeg' });
  };

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
    }

    if (!user) {
      history.push('/');
      return;
    }

    axios
      .get('https://api.chatengine.io/users/me/', {
        headers: {
          'project-id': process.env.REACT_APP_PROJECT_ID,
          'user-name': user.displayName,
          'user-secret': user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })

      .catch(() => {
        let formdata = new FormData();
        // formdata.append('email', user.email);
        formdata.append('username', user.displayName);
        formdata.append('secret', user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append('avatar', avatar, avatar.name);

          axios
            .post('https://api.chatengine.io/users/', formdata, {
              headers: {
                'private-key': process.env.REACT_APP_PRIVATE_KEY,
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  if (!user || loading) return 'Loading ...';

  return (
    <div className='max-w-screen-2xl m-auto '>
      <Nav />
      <ChatEngine
        height='calc(95vh - 37px)'
        projectID={process.env.REACT_APP_PROJECT_ID}
        userName={user.displayName}
        userSecret={user.uid}
      />
      <Footer />
    </div>
  );
};
