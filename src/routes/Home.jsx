import React, { useState, useEffect } from 'react';
import blogFetch from '../axios/config';
import { Link } from 'react-router-dom';
import FriendsList from '../components/FriendsList';

import './Home.css';

const Home = () => {
  const [likes, setLikes] = useState({});
  const [posts, setPosts] = useState([]);

  const handleLike = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
  };

  const getPosts = async () => {
    try {
      const response = await blogFetch.get('/posts');
      console.log(response.data); // Verifique os dados retornados no console

      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <FriendsList />
      <h1>Últimos posts</h1>
      {Array.isArray(posts) && posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
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
  );
};

export default Home;