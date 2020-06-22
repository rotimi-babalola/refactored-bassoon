import axios from 'axios';

const uploadFile = async (files: File[]) => {
  const firstFile = files[0];

  const response = await axios.post('http://localhost:4000/signS3', {
    fileName: firstFile.name,
    fileType: firstFile.type,
  });

  const returnData = response.data.data;
  const { signedRequest } = returnData;

  const options = {
    headers: {
      'Content-Type': firstFile.type,
    },
  };

  try {
    const result = await axios.put(signedRequest, firstFile, options);
    if (result.status === 200) {
      console.log('Success');
    }
  } catch (error) {
    console.log(error);
  }
};

export default uploadFile;
