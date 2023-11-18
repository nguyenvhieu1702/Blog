import React from 'react'
import Navbar from '../component/Navbar'
import PostList from '../component/PostList'
import HighLightPost from '../component/HighLightPost';

const styles = {
  row: {
    paddingTop: '2rem',
    display: "flex",
    gap: "8px",
  }
};

const HomePage = () => {
  return (
    <main>
        <Navbar />

        <div style={styles.row}>
          <PostList />
          <HighLightPost />
        </div>
    </main>
  )
}

export default HomePage