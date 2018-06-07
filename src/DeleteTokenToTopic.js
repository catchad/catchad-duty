import employees from './data/employees';

const DeleteTokenToTopic = token => {
  employees.forEach((item, index) => {
    const key =
      'AAAAT8R2EPY:APA91bGXeH2_9oIGqCHL1PA8QsjnMMCHLfENE-1AZBlzwuUMGd_ruo33bV9dwK-bBL_KnyhLIjZPF_lvObdRn0JG02xEKS5zYGe3uMo55HSL5kGaZlIhb3CfRj-7eLM_weWawKFLDK8U';

    fetch(`https://iid.googleapis.com/iid/v1/${token}/rel/topics/${index}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'key=' + key,
        'Content-Type': 'application/json'
      }
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.error(error);
      });
  });
};

export default DeleteTokenToTopic;
