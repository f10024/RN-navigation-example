<p data-ke-size="size16">이 글에서는 react-navigation을 사용하여 stack, tab, Drawer 등을 활용해 볼게요.</p>
<p data-ke-size="size16">&nbsp;</p>
<h4 data-ke-size="size20"><b>전제조건</b></h4>
<p data-ke-size="size16">nodejs, vscode, (Android Studio 또는 Xcode) 가 로컬환경에 설치되어 있다는 가정하에&nbsp;</p>
<p data-ke-size="size16">시작합니다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16"><b>React 프로젝트 설치</b></p>
<p data-ke-size="size16">먼저 reactnative cli로 프로젝트를 설치합니다.</p>
<p data-ke-size="size16">그다음 vscode 로 프로젝트를 열어 주세요</p>
<pre id="code_1684161546729" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>npx react-native@latest init navigationTest</code></pre>
<p>[##_Image|kage@b87Tcf/btsf2qQHfAM/J3Z2ZcSzfeTiKLTC1v7utK/img.png|CDM|1.3|{"originWidth":1365,"originHeight":1382,"style":"alignCenter"}_##]</p>
<p data-ke-size="size16">&nbsp;</p>
<h4 data-ke-size="size20"><b>라이브러리 설치</b></h4>
<p data-ke-size="size16">react-navigation&nbsp; 을 사용하기 위해서는 아래의 라이브러리를 설치하여야 합니다.</p>
<pre id="code_1684161795203" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/drawer</code></pre>
<p data-ke-size="size16"><b><span style="background-color: #dddddd;">위의 라이브러리만 설치하고 만약에 코드를 사용하셨다면 정상적으로 코드가 작동하지 않을겁니다.</span></b></p>
<p data-ke-size="size16"><b><span style="background-color: #dddddd;">그래서 아래의 종속성이 있는 제스처 및 애니메이션 라이브러리를 설치하여야 합니다.</span></b></p>
<pre id="code_1684161926218" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16"><b>컴포넌트 설정</b></p>
<p data-ke-size="size16">stack navigation 을 사용하기 위해서 컴포넌트가 필요하여 컴포넌트 2개 만들겠습니다.</p>
<pre id="code_1684162688624" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>// ./src/components/Home.js

import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Home = ({ navigation }) =&gt; {
  return (
    &lt;View style={styles.container}&gt;
      &lt;Text&gt;홈 화면 입니다.&lt;/Text&gt;
      &lt;Button title="홈 버튼" onPress={() =&gt; navigation.navigate("Home2")} /&gt;
    &lt;/View&gt;
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;</code></pre>
<pre id="code_1684162799150" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>// ./src/components/Home2.js

import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Home2 = ({ navigation }) =&gt; {
  return (
    &lt;View style={styles.container}&gt;
      &lt;Text&gt;홈2 화면 입니다.&lt;/Text&gt;
      &lt;Button title="홈2 버튼" onPress={() =&gt; navigation.navigate("Home")} /&gt;
    &lt;/View&gt;
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home2;</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<h4 data-ke-size="size20"><b>stack 설정</b></h4>
<p data-ke-size="size16">이제 스택을 사용해 볼까요?</p>
<p data-ke-size="size16">스택을 사용하여 화면을 전환 할수 있습니다.</p>
<p data-ke-size="size16">먼저 <b>StackNavigator.js </b>를 만들고 그 안에 위에서 만들었던<b> Home,Home2 </b>컴포넌트를 연결합니다.</p>
<pre id="code_1684166587141" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../components/Home';
import Home2 from '../components/Home2';

const Stack = createStackNavigator();

const MainStackNavigator = () =&gt; {
  return (
    &lt;Stack.Navigator&gt;
      &lt;Stack.Screen name="Home" component={Home} /&gt;
      &lt;Stack.Screen name="Home2" component={Home2} /&gt;
    &lt;/Stack.Navigator&gt;
  );
}

export { MainStackNavigator };</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">마지막으로 App.js 에서 StackNavgator를 설정합니다.</p>
<p data-ke-size="size16">그럼 아래와 같이 버튼을 누를시 이동합니다.</p>
<p data-ke-size="size16">stack 를 한장씩 위에 쌓이는 형태 입니다.</p>
<pre id="code_1684166760222" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>// App.js

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from './src/navigation/StackNavigator'

const App = () =&gt; {

  return (
    &lt;NavigationContainer&gt;
      &lt;MainStackNavigator /&gt;
    &lt;/NavigationContainer&gt;
  );
}

export default App;</code></pre>
<p>[##_Image|kage@bi6uaf/btsfOILyp9S/S3GDa7Vt3IKpgZmucuWdYK/img.gif|CDM|1.3|{"originWidth":600,"originHeight":1256,"style":"alignCenter","width":323,"height":676,"filename":"ezgif.com-video-to-gif (1).gif"}_##]</p>
<h4 data-ke-size="size20"><b>bottom tab 설정</b></h4>
<p data-ke-size="size16">다음은 하단에 탭을 설정하여 이동할수 있습니다.</p>
<p data-ke-size="size16">BottomTabNavigator.js 을 만들고 StackNavigator.js stack을 하나 더 추가해 보겠습니다.</p>
<p data-ke-size="size16">tab은 stack을 껴넣을 수가 있습니다.</p>
<p data-ke-size="size16">우선 아래의 내용을 생성해 주세요.</p>
<pre id="code_1684202692684" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>// ./navigation/BottomTabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, MainStackNavigator2} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarLabelStyle:{
    fontSize: 20,
    margin: 0,
    padding: 0,
    flex:1,
  },
  tabBarIconStyle: {
    display:'none',
  }
};


const BottomTabNavigator = () =&gt; {
  return (
    &lt;Tab.Navigator screenOptions={screenOptions}&gt;
      &lt;Tab.Screen name="bottom1" component={MainStackNavigator} /&gt;
      &lt;Tab.Screen name="bottom2" component={MainStackNavigator2}  /&gt;
    &lt;/Tab.Navigator&gt;
  );
};

export default BottomTabNavigator;</code></pre>
<p data-ke-size="size16">StackNavigator.js MainStackNavigator2 추가</p>
<pre id="code_1684202759982" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../components/Home';
import Home2 from '../components/Home2';

const Stack = createStackNavigator();

const MainStackNavigator = () =&gt; {
  return (
    &lt;Stack.Navigator&gt;
      &lt;Stack.Screen name="Home" component={Home} /&gt;
      &lt;Stack.Screen name="Home2" component={Home2} /&gt;
    &lt;/Stack.Navigator&gt;
  );
}

const MainStackNavigator2 = () =&gt; {
  return (
    &lt;Stack.Navigator&gt;
      &lt;Stack.Screen name="Home2" component={Home2} /&gt;
      &lt;Stack.Screen name="Home" component={Home} /&gt;
    &lt;/Stack.Navigator&gt;
  );
}

export { MainStackNavigator, MainStackNavigator2 };</code></pre>
<h4 data-ke-size="size20"><b>app.js tab 변경</b></h4>
<p data-ke-size="size16">BottomTabNavigator 를 설정하여 하여 줍니다.</p>
<pre id="code_1684204671507" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>// App.js

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from './src/navigation/StackNavigator'
import MainBottomTabNavigator from './src/navigation/BottomTabNavigator'

const App = () =&gt; {

  return (
    &lt;NavigationContainer&gt;
      &lt;MainBottomTabNavigator /&gt;
    &lt;/NavigationContainer&gt;
  );
}

export default App;</code></pre>
<p>[##_Image|kage@coPxVV/btsf2KuSBEq/MIXzCrDw725R0TIT5LWXr0/img.gif|CDM|1.3|{"originWidth":600,"originHeight":1299,"style":"alignCenter","width":323,"height":699,"filename":"ezgif.com-video-to-gif (2).gif"}_##]</p>
<h4 style="color: #000000; text-align: start;" data-ke-size="size20"><b>drawer 설정</b></h4>
<p data-ke-size="size16">이번엔 보통 부르기를 사이드바 라고들 많이 하는 darwer 을 사용해 보겠습니다.</p>
<p data-ke-size="size16">먼저 DrawerNavigator.js 만들고 app.js에 껴넣어 주면 됩니다.</p>
<p data-ke-size="size16">drawer screen 에는 tab navi 를 넣어 보겠습니다.</p>
<pre id="code_1684207370725" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>// ./navigation/DrawerNavigator.js

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import {MainStackNavigator,MainStackNavigator2} from "./StackNavigator";
import TabNavi from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () =&gt; {
  return (
    &lt;Drawer.Navigator&gt;
      &lt;Drawer.Screen name="drawer1" component={TabNavi} /&gt;
      &lt;Drawer.Screen name="drawer2" component={MainStackNavigator} /&gt;
    &lt;/Drawer.Navigator&gt;
  );
}

export default DrawerNavigator;</code></pre>
<p data-ke-size="size16">app.js 수정</p>
<pre id="code_1684207400956" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>// App.js

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from './src/navigation/StackNavigator'
import MainBottomTabNavigator from './src/navigation/BottomTabNavigator'
import MainDrawerNavigator from "./src/navigation/DrawerNavigator";

const App = () =&gt; {

  return (
    &lt;NavigationContainer&gt;
      &lt;MainDrawerNavigator /&gt;
    &lt;/NavigationContainer&gt;
  );
}

export default App;</code></pre>
<p>[##_Image|kage@kBiRy/btsf43AuD14/Y1OyhdClKVihqveyr6C9r1/img.gif|CDM|1.3|{"originWidth":600,"originHeight":1299,"style":"alignCenter","width":323,"height":699,"filename":"ezgif.com-video-to-gif (3).gif"}_##]</p>
<p data-ke-size="size16"><b>drawer 추가시 에러가 있을시</b></p>
<p>[##_Image|kage@mMdi5/btsgaM5TmnZ/Ix9Q3WiRgPCXhcY3oI8uPk/img.png|CDM|1.3|{"originWidth":2407,"originHeight":106,"style":"alignCenter","width":860,"height":38,"filename":"err1.png"}_##]</p>
<p data-ke-size="size16">위의 처럼 에러가 있을시에는&nbsp;</p>
<p style="color: #333333; text-align: start;" data-ke-size="size16">babel.config.js 에<span>&nbsp;</span>react-native-reanimated/plugin 을 추가해 주어야 합니다.</p>
<p style="color: #333333; text-align: start;" data-ke-size="size16">plugins 부분부터 추가해 주면 됩니다.</p>
<pre id="code_1684207895250" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>// babel.config.js

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
  ],  
};</code></pre>
<p data-ke-size="size16">아래의 명령어로 재시작 해보세요</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<pre id="code_1684207944939" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>npm start -- --reset-cache</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">reactnative 의 navigation 예제를 사용해 봤습니다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>