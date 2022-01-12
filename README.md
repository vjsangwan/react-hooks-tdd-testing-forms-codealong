# Testing Forms

## Learning Goals

- Learning Goal 1
- Learning Goal 2

## Introduction

In the previous lesson, we looked at how to use the `user-event` library to
simulate user events such as clicks. In this lesson, we'll talk more
specifically around user events that are commonly associated with forms.

If you'd like to following along, fork and clone this repo, then run `npm
install` and `npm test`. You may also want to run `npm start` in a separate tab
so you can see our progress in the browser as well.

## Pizza Redux

Let's return to our pizza restaurant example. There's a bit more information we
need from our customers, including what size pizza they'd like, and whether the
order is for pickup or delivery. If they choose delivery, we'll also need to get
their address. Finally, we'll need to add an "Order" button to submit the order,
and display a message when the user clicks it so the customer knows their order
has been received.

As before, we'll use test-driven development. Specifically, for a given element
of the UI, we'll:

- Identify the behavior we want
- Write the tests to check for that behavior
- Write the code to make the tests pass

We've already made a few updates to the earlier code, including wrapping the
checkbox element inside a form element. From here, our goals are to add:

1. an input for selecting the size of the pizza; we'll use a dropdown
2. an input for selecting pickup or delivery; we'll use radio buttons
3. an input the customer will use to enter their address
4. an "Order" button that will submit the form

### Select the Pizza Size

Form-specific queries:

- PlaceholderText
- LabelText
- DisplayValue

### Select Pickup or Delivery


### Enter the Delivery Address


### Submit the Order



## Conclusion

A short one or two paragraph summary of the contents of the lessons, recapping
the learning goals.

## Resources

- [Testing Library Queries - Priority](https://testing-library.com/docs/queries/about/#priority)
- [Resource Link 2](example.com)
