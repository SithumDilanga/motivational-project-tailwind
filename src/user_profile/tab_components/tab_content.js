import React from 'react'
import PostsContent from './tab_content/posts_content';
import Bookmarks from './tab_content/bookmarks_content';
import OthersContent from "./tab_content/others_content";


function TabContent({currentTab}) {

  if(currentTab == 'posts') {
    return (
      <PostsContent />
    );
  } else if(currentTab == 'bookmarks') {
    return (
      <Bookmarks />
    );
  } else if(currentTab = 'others') {
    return (
      <OthersContent />
    );
  }

	
}

export default TabContent;