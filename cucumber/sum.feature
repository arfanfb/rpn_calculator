Feature: SUM Calculation
    Scenario Outline: SUM Calculation
        Given user input "<input>"
        Then system return "<answer>"

    Examples:
        |input                  |   answer      |
        |1+1                    |     2         |