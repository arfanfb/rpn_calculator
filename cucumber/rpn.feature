Feature: RPN Calculation
    Scenario Outline: RPN Calculation
        Given user input rpn string "<input>"
        Then system return rpn result "<answer>"

    Examples:
        |input                      |   answer      |
        |2,3,!,+                    |     8         |
        |9,5,3,+,2,4,^,-,+,4,+,2,^  |     25        |