## react-tip

A no-frills tooltip for React.js

### To Do
 - [ ] Center tips
 - [ ] Add arrows

### Getting Started
`$ npm install --save-dev react-tip`

### Example

```javascript
<Tooltip placement="top" tip="I'm up top yo">
  <button>Hit me hi.</button>
</Tooltip>

<Tooltip placement="bottom" tip="Keep it on the down low" offset={20}>
  <a href="#">Hit me low.</a>
</Tooltip>
```

### Options
 - placement (top, bottom)
 - offset (number) // distance from element

#### See it in detail
To view examples:
 1. $ npm install
 2. $ gulp
 3. open http://localhost:5000
