import usersData from '../users.json';
import './Profile.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogFetch from '../axios/config' 

const Profile = () => {
    const [user, setUser] = useState(null);
    const [likes, setLikes] = useState({});
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      // Seleciona um usuário aleatório
      const randomUser = usersData.users[Math.floor(Math.random() * usersData.users.length)];
      setUser(randomUser);
    }, []);
  
    const handleLike = (postId) => {
      setLikes((prevLikes) => ({
        ...prevLikes,
        [postId]: (prevLikes[postId] || 0) + 1
      }));
    };
  
    const getPosts = async () => {
      try {
        // Lógica para obter os posts (exemplo)
        const response = await blogFetch.get('/posts');
        const data = response.data;
        setPosts(data.slice(0, 3)); // Limita a lista de posts a 3
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getPosts();
    }, []);
  
    if (!user) {
      return null;
    }
  
    return (
      <div className="profile">
        <div className="info">
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <p>Email: {user.email}</p>
        </div>
        <div className="photo">
          <img src={user.photoUrl} alt={user.name} />
        </div>
        <div className="posts">
          <h3>Últimos posts</h3>
          {posts.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            posts.map((post) => (
              <div className="post" key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <div className="post-actions">
                  <button onClick={() => handleLike(post.id)} className="btn">
                    Curtir ({likes[post.id] || 0})
                  </button>
                  <Link to={`/posts/${post.id}`} className="btn">
                    Ler mais
                  </Link>
                  <button className="btn">Comentar</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  
  export default Profile;