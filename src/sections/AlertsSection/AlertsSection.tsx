import { hideMessage } from 'models/ui';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from 'rootReducer';

import Alerts from 'components/Alerts';

const AlertsSection: FC<any> = () => {
  const dispatch = useDispatch();

  const { messages } = useSelector((state: TRootState) => state.ui);

  return <Alerts messages={messages} hideMessage={(message) => dispatch(hideMessage(message))} />;
};

export default AlertsSection;
