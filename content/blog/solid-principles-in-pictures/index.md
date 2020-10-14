---
title: Nắm nguyên tắc SOLID thông qua hình ảnh
date: "2020-10-14"
description: Khái quát các nguyên tắc lập trình OOP SOLID thông qua hình ảnh.
tags: ["SOLID", "OOP"]
---

![Solid](https://miro.medium.com/max/1000/1*wrxj0oBKpA_GXb8LPhXOeg.png)

# Giới thiệu

Nếu bạn đã quen thuộc với lập trình hướng đối tượng, thì bạn có thể đã nghe nói về các nguyên tắc **SOLID**.

Năm nguyên tắc phát triển phần mềm này là các nguyên tắc cần tuân theo để phát triển một phần mềm dễ mở rộng và bảo trì hơn.

Mục đích chính của bài viết này là để hiểu rõ hơn về các nguyên tắc này bằng cách sử dụng hình ảnh minh họa và nhấn mạnh mục tiêu cho từng nguyên tắc.

Nếu như bạn là người từng trải, thì bạn chắc hẳn phải biết là một số nguyên tắc có thể trông giống nhau nhưng chúng không nhắm đến cùng một mục tiêu. Có thể thỏa mãn nguyên tắc này trong khi vi phạm nguyên tắc kia, mặc dù chúng giống nhau.

# SOLID Principles

## S - Single Responibility

_Mỗi class chỉ nên chứa một trách nhiệm duy nhất_
![SG](https://miro.medium.com/max/1000/1*P3oONz9Da3Tc1w97fMV73Q.png)

Nếu một Class chứa nhiều trách nhiệm khác nhau sẽ làm tăng khả năng xảy ra bug vì khi ta thay đổi một thành phần của Class có thể ảnh hưởng đến những thành phần khác.

### Mục đích

Nguyên tắc này nhằm mục đích phân tách các hành vi để nếu lỗi phát sinh do thay đổi nào đó trong code, nó sẽ không ảnh hưởng đến các hành vi không liên quan khác.
