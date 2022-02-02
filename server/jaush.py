
# coding: utf-8

import sys
Monday, Mulago=sys.argv[1],sys.argv[2]


# In[1]:


import pandas as pd
import numpy as np


# In[2]:


data=pd.read_csv("Datasheet (Autosaved).csv")





# In[8]:


x=data[['day','hospital']]
y=data[["Number of patients"]]


# In[9]:


# In[11]:


from sklearn.model_selection import train_test_split
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.2)


# In[12]:


from sklearn.linear_model import LinearRegression


# In[13]:


from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import make_column_transformer
from sklearn.pipeline import make_pipeline
from sklearn.metrics import r2_score


# In[14]:


ohe=OneHotEncoder()
ohe.fit(x[['day','hospital']])


# In[15]:


column_trans=make_column_transformer((OneHotEncoder(categories=ohe.categories_),['day','hospital']),
                                    remainder='passthrough')


# In[16]:


lr=LinearRegression()


# In[17]:


pipe=make_pipeline(column_trans,lr)


# In[18]:


pipe.fit(x_train,y_train)


# In[19]:


y_pred=pipe.predict(x_test)


# In[20]:


r2_score(y_test,y_pred)


# In[ ]:


x=pipe.predict(pd.DataFrame(columns=x_test.columns,data=np.array([Monday,Mulago]).reshape(1,2)))


# In[ ]:

print(int(x.item(0)))





