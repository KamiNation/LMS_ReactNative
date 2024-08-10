# Cannot destructure property 'email' of 'userInfo' as it is undefined.


```typescript

 34 |  const userInfo =  useSelector((state:RootState) => state.authentication.userInfo)
 35 | 
 36 | const { email, password } = userInfo
    |         ^
 37 |
 38 | const dispatch = useDispatch()

```

## Solution: Conditional Destructuring

### You can use conditional (safe) destructuring to avoid attempting to destructure email and password from an undefined object

## Use Optional Chaining: This will safely access properties and prevent errors if userInfo is undefined.

```typescript
const userInfo = useSelector((state: RootState) => state.authentication.userInfo);

const email = userInfo?.email || '';
const password = userInfo?.password || '';

```

## Handle the Fallback Case: Alternatively, you can add a fallback object when destructuring to ensure that userInfo is never undefined

```typescript
const userInfo = useSelector((state: RootState) => state.authentication.userInfo) || { email: '', password: '' };

const { email, password } = userInfo;

```

## Check Before Rendering: If you want to wait until userInfo is defined before rendering the input fields, you can add a conditional rendering check

```typescript
const userInfo = useSelector((state: RootState) => state.authentication.userInfo);

if (!userInfo) {
    return <View><Text>Loading...</Text></View>;
}

const { email, password } = userInfo;


```

## If you're experiencing issues accessing the userInfo from the state, there are a few potential reasons to consider


### Redux Persist and Rehydration

### If you're using Redux Persist, there could be a delay or issue in rehydrating the state when the app loads. During this delay, the state might be undefined, causing your component to fail when trying to access it.