import { useState } from 'react';
import { storage, db } from '../config/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import './post.css';

const Post = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(''); // To store the image URL for displaying on screen

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!image) return;

    setUploading(true);
    const imageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(imageRef, image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Optionally, handle progress here if you want to show it to the user
      },
      (error) => {
        console.log('Error uploading:', error);
        setUploading(false);
      },
      async () => {
        // When the upload completes, get the download URL
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log('File available at', downloadURL);
        
        // Store the post details in Firestore (image URL + description)
        await addDoc(collection(db, 'posts'), {
          imageUrl: downloadURL,
          description: description,
        });

        // Set the image URL for displaying on the screen
        setImageUrl(downloadURL);
        setUploading(false);
        setImage(null);
        setDescription('');
      }
    );
  };

  return (
    <div>
      <h2>Upload a Post</h2>
      <input type="file" onChange={handleImageChange} />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a description..."
      ></textarea>
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>

      {/* Display the uploaded image */}
      {imageUrl && (
        <div>
          <h3>Your Uploaded Post:</h3>
          <img src={imageUrl} alt="Uploaded Post" style={{ maxWidth: '300px', marginTop: '20px' }} />
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
