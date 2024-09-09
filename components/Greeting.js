import React from 'react';
import {View, Text, Button} from 'react-native';

const Greeting = ({name}) => {
  return (
    <>
      {/* 여러줄 ... */}
      <View // 한줄 주석
      >
        <Text>안녕하세요, {name ?? '기본 이름'}</Text>
        <Button title="확인" />
      </View>
    </>
  );
};

/*
Greeting.defaultProps = {
  name: '기본 이름',
};
*/
export default Greeting;
