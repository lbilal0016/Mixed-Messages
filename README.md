# Mixed-Messages
## About the project
A JS portfolio project to generate random messages as a part of Full-Stack Development learning process.

## 1. Message string
The program uses a text to select randomly words from. This text is read from text file, which is editable by the user. Once the program starts, the program asks the user if more words are requested. If so, the program selects a word from the text input, until the user decides to stop the program.

The exemplary text for this program is the lorem ipsum text, but it can be edited later:

*Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.*

## 2. How to use the program
The program is very easy to use, and also self-explaining. But here are the steps to use it:

1. At the beginning the program asks the user if they want to generate a word
2. Any character that is not a digit or non-negative number was interpreted by the program as '*yes*'
3. If the user chooses to pass a non-negative number instead of a character, then this is interpreted as a requeest to generate a sentence with as many words as the user provides
4. If the user chooses to pass a character, in this case a random word from the input file is passed

## 3. Usage example
#### 3.1. User generates a single word using the program
```shell
$ node MixedMsg.js
>   Do you want to generate a random word? (I will take everything except 'n' as a yes, and if you give me a number I will generate you a sentence including that many words):
>   y
>   -> Here is a random word: aliquyam
=====================================================
```

#### 3.2. User generates a sentence using the program
```shell
$ node MixedMsg.js
>   Do you want to generate a random word? (I will take everything except 'n' as a yes, and if you give me a number I will generate you a sentence including that many words):
>   5
>   -> Here is a random word: et sed dolor Lorem et
=====================================================
```

#### 3.4. User closes the program
```shell
$ node MixedMsg.js
> Do you want to generate a random word? (I will take everything except 'n' as a yes, and if you give me a number I will generate you a sentence including that many words):
>   y
>   -> Here is a random word: consetetur
=====================================================

Do you want to generate a random word? (I will take everything except 'n' as a yes, and if you give me a number I will generate you a sentence including that many words):
n
$
```