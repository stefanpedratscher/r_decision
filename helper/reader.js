import * as RNFS from 'react-native-fs';

const readFile = () => {
    return RNFS.readFile('./data/data.json', 'ascii')
      .then((res) => {
        console.log(res);
        const d = JSON.parse(res);
        this.setState({ content: res, fruitType: d.type });
      })
      .catch((err) => {
        console.log(err.message, err.code);
      });
};