---
title: Immutability là gì và tại sao nó lại quan trọng
date: "2020-10-04"
description: Một khái quát ngắn gọn và đầy đủ về Immutable/Immutability trong Javascript và React.
tags: ["javascript", "react", "immutability"]
---

# Giới thiệu

**Immutability (sự bất biến)** là một khái niệm được sử dụng thường xuyên khi bạn lập trình với các đối tượng (Object), đặc biệt là trong Javascript và React.

Hiểu nôm na thì ta có thể diễn giải Immutability là **"Các trạng thái/ dữ liệu của một đối tượng immutability không thể bị thay đổi từ khi nó được tạo ra"**, nghe thì có vẻ dễ hiểu nhưng khi thật sự đào sâu ta mới thấy nó **devil** đến mức nào :(.

Trước khi đào sâu để biết tại sao Immutability lại quan trọng trong JS/React, thì chúng ta cùng tìm hiểu trước về **Mutation (Sự thay đổi)** nhé~!

# Mutation (Sự thay đổi)

Mutation là tất cả các cách thức mà chúng ta tác động tới một đối tượng và làm thay đổi giá trị của nó.

```javascript
let a = 1
a = 2
console.log(a) //2
// Chúng ta đã thay đổi giá trị của biến a
```

# Truyền bằng tham trị (Value) và truyền bằng tham chiếu (Reference)

Trong javascript, một biến có thể chứa dữ liệu có kiểu tham trị (number, string, boolean, null, undefined và Symbol) hoặc là kiểu tham chiếu ( Object, Array và Function)

## Truyền bằng tham trị

```javascript
let a = 12
let b = a
console.log(a) // 12
console.log(b) // 12

a = 15
console.log(a) // 15
console.log(b) // 12
```

Chúng ta có hai biến a và b. Sau đó, chúng ta thay đổi giá trị của a bằng 15. Như thế, chúng ta đã mutate dữ liệu của a. Nhưng dữ liệu của b vẫn như ban đầu. Trong javascript, chúng ta gọi đây là Pass by Value.

## Truyền bằng tham chiếu

```javascript
let a = {
    value : 12;
}
let b = a
console.log(a.value) // 12
console.log(b.value) // 12

a.value = 15;
console.log(a.value) // 15
console.log(b.value) // 15 ?? nani dàfug
```

Thay vì **a** là number thì giờ **a** là một biến lưu reference của một anonymous object. **b** được gán bằng **a** tức là copy giá trị reference của object đang nằm trong **a** và gán nó vào **b**.

Khi giá trị value được thay đổi, thì khi lấy giá trị bằng biến **a** hay **b** thì chúng ta cũng sẽ lấy được giá trị giống nhau.

**Pass by reference** đều xảy ra với các loại giá trị Array, Object, Function khi chúng ta gán thông thường, hoặc khi các giá trị này làm tham số của hàm.

```javascript
let newArr = [1, 2, 3, 4, 5, 6]

function addNum(a) {
  a.push(7)
}

addNum(newArr)
console.log(newArr) // [1,2,3,4,5,6,7] WHAAAAAT?
```

# Có vấn đề gì với Mutate Objects ???

Điều đầu tiên mà bạn học được khi làm việc với React là bạn không nên thay đổi một object

```javascript
// gà thế, thay đổi mảng gốc rồi
items.push(newItem)
// hay đó, làm như này sẽ không thay đổi mảng gốc.
const newItems = items.concat([newItem])
```

Nhưng

Bạn biết tại sao không ?

Bạn biết vì sao không được thay đổi các object không?

![Dont mutate object](https://i0.wp.com/blog.logrocket.com/wp-content/uploads/2018/04/0_88XOllaZvI-HBP8o.png?w=422&ssl=1)

**Sự thật là không có gì sai với việc thay đổi một Object**

**Guest** : À thế à, thế những vấn đề trong các tình huống concurrency thì sao nhỉ, như starvation, race condition, deadlock ??

**Shivaluma** : À thế làm sao mà à, mày muốn lập trình nhanh thì phải làm như vậy đó, đây là sự đánh đổi, hiểu chưa :v
