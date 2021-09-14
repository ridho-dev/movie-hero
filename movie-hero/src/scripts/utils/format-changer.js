const changeDateFormat = (dateFormat) => {
  const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const splittedDate = dateFormat.split('-');

  const Date = {
    year: splittedDate[0],
    month: splittedDate[1],
    date: splittedDate[2],
  };

  return `${months[parseInt(Date.month, 10) - 1]} ${Date.date}, ${Date.year}`;
};

const changeVoteFormat = (voteFormat) => parseFloat(voteFormat).toFixed(1);

export { changeDateFormat, changeVoteFormat };
